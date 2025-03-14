__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3513
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Named",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                15,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
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
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                27
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  21,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              15,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          }
        ],
        "range": [
          13,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
          232,
          235
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 6
          },
          "start": {
            "column": 68,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "duplicateIndetifiers",
        "optional": false,
        "range": [
          173,
          193
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
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
                "name": "name",
                "optional": false,
                "range": [
                  196,
                  200
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
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  202,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 6
                  },
                  "start": {
                    "column": 38,
                    "line": 6
                  }
                }
              },
              "range": [
                196,
                207
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 6
                }
              }
            },
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "range": [
                  209,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 6
                  },
                  "start": {
                    "column": 45,
                    "line": 6
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias2",
                "optional": false,
                "range": [
                  215,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 6
                  },
                  "start": {
                    "column": 51,
                    "line": 6
                  }
                }
              },
              "range": [
                209,
                221
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 6
                },
                "start": {
                  "column": 45,
                  "line": 6
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 6
              },
              "start": {
                "column": 59,
                "line": 6
              }
            },
            "range": [
              223,
              230
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "range": [
                  225,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 6
                  },
                  "start": {
                    "column": 61,
                    "line": 6
                  }
                }
              },
              "range": [
                225,
                230
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 6
                },
                "start": {
                  "column": 61,
                  "line": 6
                }
              }
            }
          },
          "range": [
            194,
            230
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 6
            },
            "start": {
              "column": 30,
              "line": 6
            }
          }
        }
      ],
      "range": [
        164,
        235
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
          305,
          308
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 7
          },
          "start": {
            "column": 69,
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
        "name": "duplicateIndetifiers2",
        "optional": false,
        "range": [
          245,
          266
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 35,
                "line": 7
              }
            },
            "range": [
              271,
              279
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                273,
                279
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 37,
                  "line": 7
                }
              }
            }
          },
          "range": [
            267,
            279
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 7
            },
            "start": {
              "column": 31,
              "line": 7
            }
          }
        },
        {
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
                "name": "name",
                "optional": false,
                "range": [
                  283,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 7
                  },
                  "start": {
                    "column": 47,
                    "line": 7
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  289,
                  294
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 7
                  },
                  "start": {
                    "column": 53,
                    "line": 7
                  }
                }
              },
              "range": [
                283,
                294
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 7
                },
                "start": {
                  "column": 47,
                  "line": 7
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 7
              },
              "start": {
                "column": 60,
                "line": 7
              }
            },
            "range": [
              296,
              303
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "range": [
                  298,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 7
                  },
                  "start": {
                    "column": 62,
                    "line": 7
                  }
                }
              },
              "range": [
                298,
                303
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 7
                },
                "start": {
                  "column": 62,
                  "line": 7
                }
              }
            }
          },
          "range": [
            281,
            303
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 7
            },
            "start": {
              "column": 45,
              "line": 7
            }
          }
        }
      ],
      "range": [
        236,
        308
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
          389,
          392
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 8
          },
          "start": {
            "column": 80,
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
        "name": "duplicateIndetifiers3",
        "optional": false,
        "range": [
          318,
          339
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
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
                "name": "name",
                "optional": false,
                "range": [
                  342,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 8
                  },
                  "start": {
                    "column": 33,
                    "line": 8
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  348,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 8
                  },
                  "start": {
                    "column": 39,
                    "line": 8
                  }
                }
              },
              "range": [
                342,
                353
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 33,
                  "line": 8
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 8
              },
              "start": {
                "column": 46,
                "line": 8
              }
            },
            "range": [
              355,
              362
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "range": [
                  357,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 8
                  },
                  "start": {
                    "column": 48,
                    "line": 8
                  }
                }
              },
              "range": [
                357,
                362
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 8
                },
                "start": {
                  "column": 48,
                  "line": 8
                }
              }
            }
          },
          "range": [
            340,
            362
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 8
            },
            "start": {
              "column": 31,
              "line": 8
            }
          }
        },
        {
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
                "name": "name",
                "optional": false,
                "range": [
                  366,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 8
                  },
                  "start": {
                    "column": 57,
                    "line": 8
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias2",
                "optional": false,
                "range": [
                  372,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 8
                  },
                  "start": {
                    "column": 63,
                    "line": 8
                  }
                }
              },
              "range": [
                366,
                378
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 8
                },
                "start": {
                  "column": 57,
                  "line": 8
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 8
              },
              "start": {
                "column": 71,
                "line": 8
              }
            },
            "range": [
              380,
              387
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "range": [
                  382,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 8
                  },
                  "start": {
                    "column": 73,
                    "line": 8
                  }
                }
              },
              "range": [
                382,
                387
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 8
                },
                "start": {
                  "column": 73,
                  "line": 8
                }
              }
            }
          },
          "range": [
            364,
            387
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 8
            },
            "start": {
              "column": 55,
              "line": 8
            }
          }
        }
      ],
      "range": [
        309,
        392
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 8
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
            "name": "value",
            "optional": false,
            "range": [
              398,
              403
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              406,
              408
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "range": [
            398,
            408
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        394,
        409
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
              "name": "value",
              "optional": false,
              "range": [
                559,
                564
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 12
                },
                "start": {
                  "column": 86,
                  "line": 12
                }
              }
            },
            "range": [
              552,
              564
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 12
              },
              "start": {
                "column": 79,
                "line": 12
              }
            }
          }
        ],
        "range": [
          550,
          566
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 12
          },
          "start": {
            "column": 77,
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
        "name": "shadowedVariable",
        "optional": false,
        "range": [
          482,
          498
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "params": [
        {
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
                "name": "value",
                "optional": false,
                "range": [
                  501,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 12
                  },
                  "start": {
                    "column": 28,
                    "line": 12
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  508,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 12
                  },
                  "start": {
                    "column": 35,
                    "line": 12
                  }
                }
              },
              "range": [
                501,
                513
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 12
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 61,
                "line": 12
              },
              "start": {
                "column": 42,
                "line": 12
              }
            },
            "range": [
              515,
              534
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
                    "name": "value",
                    "optional": false,
                    "range": [
                      519,
                      524
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 12
                      },
                      "start": {
                        "column": 46,
                        "line": 12
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
                        "column": 59,
                        "line": 12
                      },
                      "start": {
                        "column": 51,
                        "line": 12
                      }
                    },
                    "range": [
                      524,
                      532
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        526,
                        532
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 12
                        },
                        "start": {
                          "column": 53,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    519,
                    532
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 12
                    },
                    "start": {
                      "column": 46,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                517,
                534
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 12
                },
                "start": {
                  "column": 44,
                  "line": 12
                }
              }
            }
          },
          "range": [
            499,
            534
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 12
            },
            "start": {
              "column": 26,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 76,
            "line": 12
          },
          "start": {
            "column": 62,
            "line": 12
          }
        },
        "range": [
          535,
          549
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              544,
              549
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 12
              },
              "start": {
                "column": 71,
                "line": 12
              }
            }
          },
          "range": [
            537,
            549
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 12
            },
            "start": {
              "column": 64,
              "line": 12
            }
          }
        }
      },
      "range": [
        473,
        566
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
          615,
          619
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 47,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notReferenced",
        "optional": false,
        "range": [
          577,
          590
        ],
        "loc": {
          "end": {
            "column": 22,
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
                "name": "name",
                "optional": false,
                "range": [
                  593,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  599,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 14
                  },
                  "start": {
                    "column": 31,
                    "line": 14
                  }
                }
              },
              "range": [
                593,
                604
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 14
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 14
              },
              "start": {
                "column": 38,
                "line": 14
              }
            },
            "range": [
              606,
              613
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "range": [
                  608,
                  613
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 14
                  },
                  "start": {
                    "column": 40,
                    "line": 14
                  }
                }
              },
              "range": [
                608,
                613
              ],
              "loc": {
                "end": {
                  "column": 45,
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
            591,
            613
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 14
            },
            "start": {
              "column": 23,
              "line": 14
            }
          }
        }
      ],
      "range": [
        568,
        619
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
        "body": [],
        "range": [
          692,
          695
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 72,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notReferencedNestedAlias",
        "optional": false,
        "range": [
          629,
          653
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [
        {
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
                "name": "p",
                "optional": false,
                "range": [
                  656,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 17
                  },
                  "start": {
                    "column": 36,
                    "line": 17
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        661,
                        665
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 17
                        },
                        "start": {
                          "column": 41,
                          "line": 17
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        667,
                        672
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 17
                        },
                        "start": {
                          "column": 47,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      661,
                      672
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 17
                      },
                      "start": {
                        "column": 41,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  659,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 17
                  },
                  "start": {
                    "column": 39,
                    "line": 17
                  }
                }
              },
              "range": [
                656,
                674
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 17
                },
                "start": {
                  "column": 36,
                  "line": 17
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 70,
                "line": 17
              },
              "start": {
                "column": 56,
                "line": 17
              }
            },
            "range": [
              676,
              690
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
                    "name": "p",
                    "optional": false,
                    "range": [
                      680,
                      681
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 17
                      },
                      "start": {
                        "column": 60,
                        "line": 17
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
                        "column": 68,
                        "line": 17
                      },
                      "start": {
                        "column": 61,
                        "line": 17
                      }
                    },
                    "range": [
                      681,
                      688
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          683,
                          688
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 17
                          },
                          "start": {
                            "column": 63,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        683,
                        688
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 17
                        },
                        "start": {
                          "column": 63,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    680,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
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
                678,
                690
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 17
                },
                "start": {
                  "column": 58,
                  "line": 17
                }
              }
            }
          },
          "range": [
            654,
            690
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 17
            },
            "start": {
              "column": 34,
              "line": 17
            }
          }
        }
      ],
      "range": [
        620,
        695
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 17
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
          763,
          766
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 67,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notReferencedArrayAlias",
        "optional": false,
        "range": [
          705,
          728
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                730,
                731
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 19
                },
                "start": {
                  "column": 34,
                  "line": 19
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                733,
                734
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 19
                },
                "start": {
                  "column": 37,
                  "line": 19
                }
              }
            },
            {
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
                    "name": "name",
                    "optional": false,
                    "range": [
                      738,
                      742
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 19
                      },
                      "start": {
                        "column": 42,
                        "line": 19
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "range": [
                      744,
                      749
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 19
                      },
                      "start": {
                        "column": 48,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    738,
                    749
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 19
                    },
                    "start": {
                      "column": 42,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                736,
                751
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 19
                },
                "start": {
                  "column": 40,
                  "line": 19
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 19
              },
              "start": {
                "column": 56,
                "line": 19
              }
            },
            "range": [
              752,
              761
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named",
                  "optional": false,
                  "range": [
                    754,
                    759
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 19
                    },
                    "start": {
                      "column": 58,
                      "line": 19
                    }
                  }
                },
                "range": [
                  754,
                  759
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 19
                  },
                  "start": {
                    "column": 58,
                    "line": 19
                  }
                }
              },
              "range": [
                754,
                761
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 19
                },
                "start": {
                  "column": 58,
                  "line": 19
                }
              }
            }
          },
          "range": [
            729,
            761
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 19
            },
            "start": {
              "column": 33,
              "line": 19
            }
          }
        }
      ],
      "range": [
        696,
        766
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 19
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
              "name": "alias",
              "optional": false,
              "range": [
                831,
                836
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "range": [
              824,
              837
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
          818,
          839
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 50,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInCode",
        "optional": false,
        "range": [
          777,
          793
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
          }
        }
      },
      "params": [
        {
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
                "name": "name",
                "optional": false,
                "range": [
                  796,
                  800
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 22
                  },
                  "start": {
                    "column": 28,
                    "line": 22
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  802,
                  807
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 22
                  },
                  "start": {
                    "column": 34,
                    "line": 22
                  }
                }
              },
              "range": [
                796,
                807
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 22
                },
                "start": {
                  "column": 28,
                  "line": 22
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 22
              },
              "start": {
                "column": 41,
                "line": 22
              }
            },
            "range": [
              809,
              816
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "range": [
                  811,
                  816
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 22
                  },
                  "start": {
                    "column": 43,
                    "line": 22
                  }
                }
              },
              "range": [
                811,
                816
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 22
                },
                "start": {
                  "column": 43,
                  "line": 22
                }
              }
            }
          },
          "range": [
            794,
            816
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 22
            },
            "start": {
              "column": 26,
              "line": 22
            }
          }
        }
      ],
      "range": [
        768,
        839
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 22
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
              "name": "alias",
              "optional": false,
              "range": [
                924,
                929
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "range": [
              917,
              930
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          911,
          932
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 70,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedInSignarture",
        "optional": false,
        "range": [
          850,
          872
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "params": [
        {
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
                "name": "name",
                "optional": false,
                "range": [
                  875,
                  879
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 26
                  },
                  "start": {
                    "column": 34,
                    "line": 26
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  881,
                  886
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 26
                  },
                  "start": {
                    "column": 40,
                    "line": 26
                  }
                }
              },
              "range": [
                875,
                886
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 26
                },
                "start": {
                  "column": 34,
                  "line": 26
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 26
              },
              "start": {
                "column": 47,
                "line": 26
              }
            },
            "range": [
              888,
              895
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "range": [
                  890,
                  895
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 26
                  },
                  "start": {
                    "column": 49,
                    "line": 26
                  }
                }
              },
              "range": [
                890,
                895
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 26
                },
                "start": {
                  "column": 49,
                  "line": 26
                }
              }
            }
          },
          "range": [
            873,
            895
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 26
            },
            "start": {
              "column": 32,
              "line": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 26
          },
          "start": {
            "column": 55,
            "line": 26
          }
        },
        "range": [
          896,
          910
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "range": [
              905,
              910
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 26
              },
              "start": {
                "column": 64,
                "line": 26
              }
            }
          },
          "range": [
            898,
            910
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 26
            },
            "start": {
              "column": 57,
              "line": 26
            }
          }
        }
      },
      "range": [
        841,
        932
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 26
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
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  1043,
                  1047
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
                  }
                }
              },
              "range": [
                1043,
                1048
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "range": [
              1036,
              1049
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          1030,
          1051
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 96,
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
        "name": "referencedInSignartureKeyword",
        "optional": false,
        "range": [
          943,
          972
        ],
        "loc": {
          "end": {
            "column": 38,
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
                "name": "function",
                "optional": false,
                "range": [
                  975,
                  983
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 30
                  },
                  "start": {
                    "column": 41,
                    "line": 30
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  985,
                  990
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 30
                  },
                  "start": {
                    "column": 51,
                    "line": 30
                  }
                }
              },
              "range": [
                975,
                990
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 30
                },
                "start": {
                  "column": 41,
                  "line": 30
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 80,
                "line": 30
              },
              "start": {
                "column": 58,
                "line": 30
              }
            },
            "range": [
              992,
              1014
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
                    "name": "function",
                    "optional": false,
                    "range": [
                      996,
                      1004
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 30
                      },
                      "start": {
                        "column": 62,
                        "line": 30
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
                        "column": 78,
                        "line": 30
                      },
                      "start": {
                        "column": 70,
                        "line": 30
                      }
                    },
                    "range": [
                      1004,
                      1012
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1006,
                        1012
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 30
                        },
                        "start": {
                          "column": 72,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    996,
                    1012
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 30
                    },
                    "start": {
                      "column": 62,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                994,
                1014
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 30
                },
                "start": {
                  "column": 60,
                  "line": 30
                }
              }
            }
          },
          "range": [
            973,
            1014
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 30
            },
            "start": {
              "column": 39,
              "line": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 95,
            "line": 30
          },
          "start": {
            "column": 81,
            "line": 30
          }
        },
        "range": [
          1015,
          1029
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "range": [
              1024,
              1029
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 30
              },
              "start": {
                "column": 90,
                "line": 30
              }
            }
          },
          "range": [
            1017,
            1029
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 30
            },
            "start": {
              "column": 83,
              "line": 30
            }
          }
        }
      },
      "range": [
        934,
        1051
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 30
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
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Named2",
              "optional": false,
              "range": [
                1122,
                1128
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 35
                },
                "start": {
                  "column": 9,
                  "line": 35
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      1133,
                      1137
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 35
                      },
                      "start": {
                        "column": 20,
                        "line": 35
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
                        "column": 38,
                        "line": 35
                      },
                      "start": {
                        "column": 24,
                        "line": 35
                      }
                    },
                    "range": [
                      1137,
                      1151
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          1146,
                          1151
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 35
                          },
                          "start": {
                            "column": 33,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        1139,
                        1151
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 35
                        },
                        "start": {
                          "column": 26,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    1133,
                    1151
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 35
                    },
                    "start": {
                      "column": 20,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                1131,
                1153
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 35
                },
                "start": {
                  "column": 18,
                  "line": 35
                }
              }
            },
            "range": [
              1117,
              1153
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1165,
                    1169
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 36
                    },
                    "start": {
                      "column": 11,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1165,
                  1170
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 36
                  },
                  "start": {
                    "column": 11,
                    "line": 36
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named2",
                  "optional": false,
                  "range": [
                    1174,
                    1180
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 36
                    },
                    "start": {
                      "column": 20,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1174,
                  1180
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 36
                  },
                  "start": {
                    "column": 20,
                    "line": 36
                  }
                }
              },
              "range": [
                1165,
                1180
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 36
                },
                "start": {
                  "column": 11,
                  "line": 36
                }
              }
            },
            "range": [
              1158,
              1180
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          1111,
          1182
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 58,
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
        "name": "referencedInInferredType",
        "optional": false,
        "range": [
          1062,
          1086
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
          }
        }
      },
      "params": [
        {
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
                "name": "name",
                "optional": false,
                "range": [
                  1089,
                  1093
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 34
                  },
                  "start": {
                    "column": 36,
                    "line": 34
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  1095,
                  1100
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 34
                  },
                  "start": {
                    "column": 42,
                    "line": 34
                  }
                }
              },
              "range": [
                1089,
                1100
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 34
                },
                "start": {
                  "column": 36,
                  "line": 34
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 34
              },
              "start": {
                "column": 49,
                "line": 34
              }
            },
            "range": [
              1102,
              1109
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "range": [
                  1104,
                  1109
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 34
                  },
                  "start": {
                    "column": 51,
                    "line": 34
                  }
                }
              },
              "range": [
                1104,
                1109
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 34
                },
                "start": {
                  "column": 51,
                  "line": 34
                }
              }
            }
          },
          "range": [
            1087,
            1109
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 34
            },
            "start": {
              "column": 34,
              "line": 34
            }
          }
        }
      ],
      "range": [
        1053,
        1182
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
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
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1283,
                  1291
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 37,
                    "line": 40
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 40
                      },
                      "start": {
                        "column": 21,
                        "line": 40
                      }
                    },
                    "range": [
                      1267,
                      1281
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          1276,
                          1281
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 40
                          },
                          "start": {
                            "column": 30,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        1269,
                        1281
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 40
                        },
                        "start": {
                          "column": 23,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    1266,
                    1281
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 40
                    },
                    "start": {
                      "column": 20,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                1257,
                1291
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 11,
                  "line": 40
                }
              }
            },
            "range": [
              1250,
              1291
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          1244,
          1293
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 60,
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
        "name": "referencedInNestedFunction",
        "optional": false,
        "range": [
          1193,
          1219
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
          }
        }
      },
      "params": [
        {
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
                "name": "name",
                "optional": false,
                "range": [
                  1222,
                  1226
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 39
                  },
                  "start": {
                    "column": 38,
                    "line": 39
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "alias",
                "optional": false,
                "range": [
                  1228,
                  1233
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 39
                  },
                  "start": {
                    "column": 44,
                    "line": 39
                  }
                }
              },
              "range": [
                1222,
                1233
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 39
                },
                "start": {
                  "column": 38,
                  "line": 39
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 39
              },
              "start": {
                "column": 51,
                "line": 39
              }
            },
            "range": [
              1235,
              1242
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Named",
                "optional": false,
                "range": [
                  1237,
                  1242
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 39
                  },
                  "start": {
                    "column": 53,
                    "line": 39
                  }
                }
              },
              "range": [
                1237,
                1242
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 39
                },
                "start": {
                  "column": 53,
                  "line": 39
                }
              }
            }
          },
          "range": [
            1220,
            1242
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 39
            },
            "start": {
              "column": 36,
              "line": 39
            }
          }
        }
      ],
      "range": [
        1184,
        1293
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "range": [
                1388,
                1393
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 46
                },
                "start": {
                  "column": 8,
                  "line": 46
                }
              }
            },
            "range": [
              1381,
              1394
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 46
              },
              "start": {
                "column": 1,
                "line": 46
              }
            }
          }
        ],
        "range": [
          1378,
          1396
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 83,
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
        "name": "referencedNestedAlias",
        "optional": false,
        "range": [
          1304,
          1325
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 45
          }
        }
      },
      "params": [
        {
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
                "name": "p",
                "optional": false,
                "range": [
                  1328,
                  1329
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 45
                  },
                  "start": {
                    "column": 33,
                    "line": 45
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        1333,
                        1337
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 45
                        },
                        "start": {
                          "column": 38,
                          "line": 45
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        1339,
                        1344
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 45
                        },
                        "start": {
                          "column": 44,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1333,
                      1344
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 45
                      },
                      "start": {
                        "column": 38,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  1331,
                  1346
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 45
                  },
                  "start": {
                    "column": 36,
                    "line": 45
                  }
                }
              },
              "range": [
                1328,
                1346
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 45
                },
                "start": {
                  "column": 33,
                  "line": 45
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 45
              },
              "start": {
                "column": 53,
                "line": 45
              }
            },
            "range": [
              1348,
              1362
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
                    "name": "p",
                    "optional": false,
                    "range": [
                      1352,
                      1353
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 45
                      },
                      "start": {
                        "column": 57,
                        "line": 45
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
                        "column": 65,
                        "line": 45
                      },
                      "start": {
                        "column": 58,
                        "line": 45
                      }
                    },
                    "range": [
                      1353,
                      1360
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          1355,
                          1360
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 45
                          },
                          "start": {
                            "column": 60,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        1355,
                        1360
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 45
                        },
                        "start": {
                          "column": 60,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    1352,
                    1360
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 45
                    },
                    "start": {
                      "column": 57,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                1350,
                1362
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 45
                },
                "start": {
                  "column": 55,
                  "line": 45
                }
              }
            }
          },
          "range": [
            1326,
            1362
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 45
            },
            "start": {
              "column": 31,
              "line": 45
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 82,
            "line": 45
          },
          "start": {
            "column": 68,
            "line": 45
          }
        },
        "range": [
          1363,
          1377
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "range": [
              1372,
              1377
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 45
              },
              "start": {
                "column": 77,
                "line": 45
              }
            }
          },
          "range": [
            1365,
            1377
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 45
            },
            "start": {
              "column": 70,
              "line": 45
            }
          }
        }
      },
      "range": [
        1295,
        1396
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 45
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
              "name": "alias",
              "optional": false,
              "range": [
                1486,
                1491
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            },
            "range": [
              1479,
              1492
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 50
              },
              "start": {
                "column": 1,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1476,
          1494
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 78,
            "line": 49
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "referencedArrayAlias",
        "optional": false,
        "range": [
          1407,
          1427
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1429,
                1430
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 49
                },
                "start": {
                  "column": 31,
                  "line": 49
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1432,
                1433
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 49
                },
                "start": {
                  "column": 34,
                  "line": 49
                }
              }
            },
            {
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
                    "name": "name",
                    "optional": false,
                    "range": [
                      1437,
                      1441
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 49
                      },
                      "start": {
                        "column": 39,
                        "line": 49
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "range": [
                      1443,
                      1448
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 49
                      },
                      "start": {
                        "column": 45,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1437,
                    1448
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 49
                    },
                    "start": {
                      "column": 39,
                      "line": 49
                    }
                  }
                }
              ],
              "range": [
                1435,
                1450
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 49
                },
                "start": {
                  "column": 37,
                  "line": 49
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 49
              },
              "start": {
                "column": 53,
                "line": 49
              }
            },
            "range": [
              1451,
              1460
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Named",
                  "optional": false,
                  "range": [
                    1453,
                    1458
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 49
                    },
                    "start": {
                      "column": 55,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1453,
                  1458
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 49
                  },
                  "start": {
                    "column": 55,
                    "line": 49
                  }
                }
              },
              "range": [
                1453,
                1460
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 49
                },
                "start": {
                  "column": 55,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1428,
            1460
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 49
            },
            "start": {
              "column": 30,
              "line": 49
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 77,
            "line": 49
          },
          "start": {
            "column": 63,
            "line": 49
          }
        },
        "range": [
          1461,
          1475
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "alias",
            "optional": false,
            "range": [
              1470,
              1475
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 49
              },
              "start": {
                "column": 72,
                "line": 49
              }
            }
          },
          "range": [
            1463,
            1475
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 49
            },
            "start": {
              "column": 65,
              "line": 49
            }
          }
        }
      },
      "range": [
        1398,
        1494
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1522,
          1697
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1525,
                1536
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 12,
                  "line": 55
                },
                "start": {
                  "column": 1,
                  "line": 55
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
                1536,
                1565
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1561,
                  1565
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 56
                  },
                  "start": {
                    "column": 37,
                    "line": 55
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          1539,
                          1543
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 55
                          },
                          "start": {
                            "column": 15,
                            "line": 55
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          1545,
                          1550
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 55
                          },
                          "start": {
                            "column": 21,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1539,
                        1550
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 55
                        },
                        "start": {
                          "column": 15,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 55
                      },
                      "start": {
                        "column": 28,
                        "line": 55
                      }
                    },
                    "range": [
                      1552,
                      1559
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          1554,
                          1559
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 55
                          },
                          "start": {
                            "column": 30,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1554,
                        1559
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 55
                        },
                        "start": {
                          "column": 30,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    1537,
                    1559
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 55
                    },
                    "start": {
                      "column": 13,
                      "line": 55
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 56
                },
                "start": {
                  "column": 12,
                  "line": 55
                }
              }
            },
            "range": [
              1525,
              1565
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 56
              },
              "start": {
                "column": 1,
                "line": 55
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
              "name": "x",
              "optional": false,
              "range": [
                1571,
                1572
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 57
                },
                "start": {
                  "column": 5,
                  "line": 57
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
                1572,
                1632
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            1619,
                            1624
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 58
                            },
                            "start": {
                              "column": 20,
                              "line": 58
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
                            1607,
                            1614
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 58
                            },
                            "start": {
                              "column": 8,
                              "line": 58
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
                            1615,
                            1618
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 58
                            },
                            "start": {
                              "column": 16,
                              "line": 58
                            }
                          }
                        },
                        "range": [
                          1607,
                          1618
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 58
                          },
                          "start": {
                            "column": 8,
                            "line": 58
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1607,
                        1625
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1607,
                      1626
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  }
                ],
                "range": [
                  1597,
                  1632
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 59
                  },
                  "start": {
                    "column": 31,
                    "line": 57
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          1575,
                          1579
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 57
                          },
                          "start": {
                            "column": 9,
                            "line": 57
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          1581,
                          1586
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 57
                          },
                          "start": {
                            "column": 15,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1575,
                        1586
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 57
                        },
                        "start": {
                          "column": 9,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 57
                      },
                      "start": {
                        "column": 22,
                        "line": 57
                      }
                    },
                    "range": [
                      1588,
                      1595
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          1590,
                          1595
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 57
                          },
                          "start": {
                            "column": 24,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1590,
                        1595
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 57
                        },
                        "start": {
                          "column": 24,
                          "line": 57
                        }
                      }
                    }
                  },
                  "range": [
                    1573,
                    1595
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 57
                    },
                    "start": {
                      "column": 7,
                      "line": 57
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 6,
                  "line": 57
                }
              }
            },
            "range": [
              1567,
              1632
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 59
              },
              "start": {
                "column": 1,
                "line": 57
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
              "name": "m",
              "optional": false,
              "range": [
                1634,
                1635
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 60
                },
                "start": {
                  "column": 1,
                  "line": 60
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
                1635,
                1695
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            1682,
                            1687
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 61
                            },
                            "start": {
                              "column": 20,
                              "line": 61
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
                            1670,
                            1677
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 61
                            },
                            "start": {
                              "column": 8,
                              "line": 61
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
                            1678,
                            1681
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 61
                            },
                            "start": {
                              "column": 16,
                              "line": 61
                            }
                          }
                        },
                        "range": [
                          1670,
                          1681
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 61
                          },
                          "start": {
                            "column": 8,
                            "line": 61
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1670,
                        1688
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 61
                        },
                        "start": {
                          "column": 8,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1670,
                      1689
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
                      }
                    }
                  }
                ],
                "range": [
                  1660,
                  1695
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 62
                  },
                  "start": {
                    "column": 27,
                    "line": 60
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          1638,
                          1642
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 60
                          },
                          "start": {
                            "column": 5,
                            "line": 60
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          1644,
                          1649
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 60
                          },
                          "start": {
                            "column": 11,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1638,
                        1649
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 60
                        },
                        "start": {
                          "column": 5,
                          "line": 60
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 60
                      },
                      "start": {
                        "column": 18,
                        "line": 60
                      }
                    },
                    "range": [
                      1651,
                      1658
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          1653,
                          1658
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 60
                          },
                          "start": {
                            "column": 20,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1653,
                        1658
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 60
                        },
                        "start": {
                          "column": 20,
                          "line": 60
                        }
                      }
                    }
                  },
                  "range": [
                    1636,
                    1658
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 60
                    },
                    "start": {
                      "column": 3,
                      "line": 60
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 62
                },
                "start": {
                  "column": 2,
                  "line": 60
                }
              }
            },
            "range": [
              1634,
              1695
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 62
              },
              "start": {
                "column": 1,
                "line": 60
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 25,
            "line": 54
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotReferencedClass",
        "optional": false,
        "range": [
          1503,
          1521
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 54
          },
          "start": {
            "column": 6,
            "line": 54
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1497,
        1697
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1726,
          1923
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1729,
                1740
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 12,
                  "line": 66
                },
                "start": {
                  "column": 1,
                  "line": 66
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
                1740,
                1791
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            1781,
                            1786
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 67
                            },
                            "start": {
                              "column": 14,
                              "line": 67
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
                            1769,
                            1776
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 67
                            },
                            "start": {
                              "column": 2,
                              "line": 67
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
                            1777,
                            1780
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 67
                            },
                            "start": {
                              "column": 10,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          1769,
                          1780
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 67
                          },
                          "start": {
                            "column": 2,
                            "line": 67
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1769,
                        1787
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 67
                        },
                        "start": {
                          "column": 2,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1769,
                      1788
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 67
                      },
                      "start": {
                        "column": 2,
                        "line": 67
                      }
                    }
                  }
                ],
                "range": [
                  1765,
                  1791
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 68
                  },
                  "start": {
                    "column": 37,
                    "line": 66
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          1743,
                          1747
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 66
                          },
                          "start": {
                            "column": 15,
                            "line": 66
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          1749,
                          1754
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 66
                          },
                          "start": {
                            "column": 21,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1743,
                        1754
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 66
                        },
                        "start": {
                          "column": 15,
                          "line": 66
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 66
                      },
                      "start": {
                        "column": 28,
                        "line": 66
                      }
                    },
                    "range": [
                      1756,
                      1763
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          1758,
                          1763
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 66
                          },
                          "start": {
                            "column": 30,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1758,
                        1763
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 66
                        },
                        "start": {
                          "column": 30,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1741,
                    1763
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 66
                    },
                    "start": {
                      "column": 13,
                      "line": 66
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 68
                },
                "start": {
                  "column": 12,
                  "line": 66
                }
              }
            },
            "range": [
              1729,
              1791
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 68
              },
              "start": {
                "column": 1,
                "line": 66
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
              "name": "x",
              "optional": false,
              "range": [
                1797,
                1798
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 69
                },
                "start": {
                  "column": 5,
                  "line": 69
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
                1798,
                1858
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            1845,
                            1850
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 70
                            },
                            "start": {
                              "column": 20,
                              "line": 70
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
                            1833,
                            1840
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 70
                            },
                            "start": {
                              "column": 8,
                              "line": 70
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
                            1841,
                            1844
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 70
                            },
                            "start": {
                              "column": 16,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1833,
                          1844
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 70
                          },
                          "start": {
                            "column": 8,
                            "line": 70
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1833,
                        1851
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 70
                        },
                        "start": {
                          "column": 8,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      1833,
                      1852
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 70
                      }
                    }
                  }
                ],
                "range": [
                  1823,
                  1858
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 31,
                    "line": 69
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          1801,
                          1805
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 69
                          },
                          "start": {
                            "column": 9,
                            "line": 69
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          1807,
                          1812
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 69
                          },
                          "start": {
                            "column": 15,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1801,
                        1812
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 69
                        },
                        "start": {
                          "column": 9,
                          "line": 69
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 69
                      },
                      "start": {
                        "column": 22,
                        "line": 69
                      }
                    },
                    "range": [
                      1814,
                      1821
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          1816,
                          1821
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 69
                          },
                          "start": {
                            "column": 24,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1816,
                        1821
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 69
                        },
                        "start": {
                          "column": 24,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    1799,
                    1821
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 69
                    },
                    "start": {
                      "column": 7,
                      "line": 69
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 71
                },
                "start": {
                  "column": 6,
                  "line": 69
                }
              }
            },
            "range": [
              1793,
              1858
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 71
              },
              "start": {
                "column": 1,
                "line": 69
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
              "name": "m",
              "optional": false,
              "range": [
                1860,
                1861
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 72
                },
                "start": {
                  "column": 1,
                  "line": 72
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
                1861,
                1921
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            1908,
                            1913
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 73
                            },
                            "start": {
                              "column": 20,
                              "line": 73
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
                            1896,
                            1903
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 73
                            },
                            "start": {
                              "column": 8,
                              "line": 73
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
                            1904,
                            1907
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 73
                            },
                            "start": {
                              "column": 16,
                              "line": 73
                            }
                          }
                        },
                        "range": [
                          1896,
                          1907
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 73
                          },
                          "start": {
                            "column": 8,
                            "line": 73
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1896,
                        1914
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 73
                        },
                        "start": {
                          "column": 8,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1896,
                      1915
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 73
                      },
                      "start": {
                        "column": 8,
                        "line": 73
                      }
                    }
                  }
                ],
                "range": [
                  1886,
                  1921
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 74
                  },
                  "start": {
                    "column": 27,
                    "line": 72
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          1864,
                          1868
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 72
                          },
                          "start": {
                            "column": 5,
                            "line": 72
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          1870,
                          1875
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 72
                          },
                          "start": {
                            "column": 11,
                            "line": 72
                          }
                        }
                      },
                      "range": [
                        1864,
                        1875
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 72
                        },
                        "start": {
                          "column": 5,
                          "line": 72
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 72
                      },
                      "start": {
                        "column": 18,
                        "line": 72
                      }
                    },
                    "range": [
                      1877,
                      1884
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          1879,
                          1884
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 72
                          },
                          "start": {
                            "column": 20,
                            "line": 72
                          }
                        }
                      },
                      "range": [
                        1879,
                        1884
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 72
                        },
                        "start": {
                          "column": 20,
                          "line": 72
                        }
                      }
                    }
                  },
                  "range": [
                    1862,
                    1884
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 72
                    },
                    "start": {
                      "column": 3,
                      "line": 72
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 74
                },
                "start": {
                  "column": 2,
                  "line": 72
                }
              }
            },
            "range": [
              1860,
              1921
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 74
              },
              "start": {
                "column": 1,
                "line": 72
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 27,
            "line": 65
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferencedInCodeClas",
        "optional": false,
        "range": [
          1705,
          1725
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 65
          },
          "start": {
            "column": 6,
            "line": 65
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1699,
        1923
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1959,
          2378
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1962,
                1973
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 12,
                  "line": 78
                },
                "start": {
                  "column": 1,
                  "line": 78
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
                1973,
                2041
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2031,
                            2036
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 79
                            },
                            "start": {
                              "column": 14,
                              "line": 79
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
                            2019,
                            2026
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 79
                            },
                            "start": {
                              "column": 2,
                              "line": 79
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
                            2027,
                            2030
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 79
                            },
                            "start": {
                              "column": 10,
                              "line": 79
                            }
                          }
                        },
                        "range": [
                          2019,
                          2030
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 79
                          },
                          "start": {
                            "column": 2,
                            "line": 79
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        2019,
                        2037
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 79
                        },
                        "start": {
                          "column": 2,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      2019,
                      2038
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 79
                      },
                      "start": {
                        "column": 2,
                        "line": 79
                      }
                    }
                  }
                ],
                "range": [
                  2015,
                  2041
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 80
                  },
                  "start": {
                    "column": 54,
                    "line": 78
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          1976,
                          1980
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 78
                          },
                          "start": {
                            "column": 15,
                            "line": 78
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          1982,
                          1987
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 78
                          },
                          "start": {
                            "column": 21,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        1976,
                        1987
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 78
                        },
                        "start": {
                          "column": 15,
                          "line": 78
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 78
                      },
                      "start": {
                        "column": 28,
                        "line": 78
                      }
                    },
                    "range": [
                      1989,
                      1996
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          1991,
                          1996
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 78
                          },
                          "start": {
                            "column": 30,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        1991,
                        1996
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 78
                        },
                        "start": {
                          "column": 30,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    1974,
                    1996
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 78
                    },
                    "start": {
                      "column": 13,
                      "line": 78
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 78
                      },
                      "start": {
                        "column": 38,
                        "line": 78
                      }
                    },
                    "range": [
                      1999,
                      2013
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          2008,
                          2013
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 78
                          },
                          "start": {
                            "column": 47,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        2001,
                        2013
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 78
                        },
                        "start": {
                          "column": 40,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    1998,
                    2013
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 78
                    },
                    "start": {
                      "column": 37,
                      "line": 78
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 80
                },
                "start": {
                  "column": 12,
                  "line": 78
                }
              }
            },
            "range": [
              1962,
              2041
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 80
              },
              "start": {
                "column": 1,
                "line": 78
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
              "name": "x",
              "optional": false,
              "range": [
                2047,
                2048
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 81
                },
                "start": {
                  "column": 5,
                  "line": 81
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
                2048,
                2111
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2095,
                  2111
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 83
                  },
                  "start": {
                    "column": 53,
                    "line": 81
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          2051,
                          2055
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 81
                          },
                          "start": {
                            "column": 9,
                            "line": 81
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          2057,
                          2062
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 81
                          },
                          "start": {
                            "column": 15,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        2051,
                        2062
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 81
                        },
                        "start": {
                          "column": 9,
                          "line": 81
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 81
                      },
                      "start": {
                        "column": 22,
                        "line": 81
                      }
                    },
                    "range": [
                      2064,
                      2093
                    ],
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Named",
                            "optional": false,
                            "range": [
                              2066,
                              2071
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 81
                              },
                              "start": {
                                "column": 24,
                                "line": 81
                              }
                            }
                          },
                          "range": [
                            2066,
                            2071
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 81
                            },
                            "start": {
                              "column": 24,
                              "line": 81
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
                                "name": "o",
                                "optional": false,
                                "range": [
                                  2076,
                                  2077
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 81
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 81
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
                                    "column": 49,
                                    "line": 81
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 81
                                  }
                                },
                                "range": [
                                  2077,
                                  2091
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "alias",
                                    "optional": false,
                                    "range": [
                                      2086,
                                      2091
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 49,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 81
                                      }
                                    }
                                  },
                                  "range": [
                                    2079,
                                    2091
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 81
                                    }
                                  }
                                }
                              },
                              "range": [
                                2076,
                                2091
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 81
                                },
                                "start": {
                                  "column": 34,
                                  "line": 81
                                }
                              }
                            }
                          ],
                          "range": [
                            2074,
                            2093
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 81
                            },
                            "start": {
                              "column": 32,
                              "line": 81
                            }
                          }
                        }
                      ],
                      "range": [
                        2066,
                        2093
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 81
                        },
                        "start": {
                          "column": 24,
                          "line": 81
                        }
                      }
                    }
                  },
                  "range": [
                    2049,
                    2093
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 81
                    },
                    "start": {
                      "column": 7,
                      "line": 81
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 6,
                  "line": 81
                }
              }
            },
            "range": [
              2043,
              2111
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 83
              },
              "start": {
                "column": 1,
                "line": 81
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
              "name": "mReturnType",
              "optional": false,
              "range": [
                2113,
                2124
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 84
                },
                "start": {
                  "column": 1,
                  "line": 84
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
                2124,
                2191
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          2180,
                          2184
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 85
                          },
                          "start": {
                            "column": 15,
                            "line": 85
                          }
                        }
                      },
                      "range": [
                        2180,
                        2185
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 85
                        },
                        "start": {
                          "column": 15,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      2173,
                      2185
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 85
                      },
                      "start": {
                        "column": 8,
                        "line": 85
                      }
                    }
                  }
                ],
                "range": [
                  2163,
                  2191
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 86
                  },
                  "start": {
                    "column": 51,
                    "line": 84
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          2127,
                          2131
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 84
                          },
                          "start": {
                            "column": 15,
                            "line": 84
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          2133,
                          2138
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 84
                          },
                          "start": {
                            "column": 21,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        2127,
                        2138
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 84
                        },
                        "start": {
                          "column": 15,
                          "line": 84
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 84
                      },
                      "start": {
                        "column": 28,
                        "line": 84
                      }
                    },
                    "range": [
                      2140,
                      2147
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          2142,
                          2147
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 84
                          },
                          "start": {
                            "column": 30,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        2142,
                        2147
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 84
                        },
                        "start": {
                          "column": 30,
                          "line": 84
                        }
                      }
                    }
                  },
                  "range": [
                    2125,
                    2147
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 84
                    },
                    "start": {
                      "column": 13,
                      "line": 84
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 84
                  },
                  "start": {
                    "column": 36,
                    "line": 84
                  }
                },
                "range": [
                  2148,
                  2162
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "range": [
                      2157,
                      2162
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 84
                      },
                      "start": {
                        "column": 45,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    2150,
                    2162
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 84
                    },
                    "start": {
                      "column": 38,
                      "line": 84
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 86
                },
                "start": {
                  "column": 12,
                  "line": 84
                }
              }
            },
            "range": [
              2113,
              2191
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 86
              },
              "start": {
                "column": 1,
                "line": 84
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
              "name": "mRerturnTypeNested",
              "optional": false,
              "range": [
                2193,
                2211
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 87
                },
                "start": {
                  "column": 1,
                  "line": 87
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
                2211,
                2291
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          2280,
                          2284
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 88
                          },
                          "start": {
                            "column": 15,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        2280,
                        2285
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 88
                        },
                        "start": {
                          "column": 15,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      2273,
                      2285
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  }
                ],
                "range": [
                  2263,
                  2291
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 89
                  },
                  "start": {
                    "column": 71,
                    "line": 87
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          2214,
                          2218
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 87
                          },
                          "start": {
                            "column": 22,
                            "line": 87
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          2220,
                          2225
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 87
                          },
                          "start": {
                            "column": 28,
                            "line": 87
                          }
                        }
                      },
                      "range": [
                        2214,
                        2225
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 87
                        },
                        "start": {
                          "column": 22,
                          "line": 87
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 87
                      },
                      "start": {
                        "column": 35,
                        "line": 87
                      }
                    },
                    "range": [
                      2227,
                      2234
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          2229,
                          2234
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 87
                          },
                          "start": {
                            "column": 37,
                            "line": 87
                          }
                        }
                      },
                      "range": [
                        2229,
                        2234
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 87
                        },
                        "start": {
                          "column": 37,
                          "line": 87
                        }
                      }
                    }
                  },
                  "range": [
                    2212,
                    2234
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 87
                    },
                    "start": {
                      "column": 20,
                      "line": 87
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 87
                  },
                  "start": {
                    "column": 43,
                    "line": 87
                  }
                },
                "range": [
                  2235,
                  2262
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2248,
                      2262
                    ],
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2256,
                            2261
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 87
                            },
                            "start": {
                              "column": 64,
                              "line": 87
                            }
                          }
                        },
                        "range": [
                          2249,
                          2261
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 87
                          },
                          "start": {
                            "column": 57,
                            "line": 87
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 87
                      },
                      "start": {
                        "column": 56,
                        "line": 87
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NonNullable",
                    "optional": false,
                    "range": [
                      2237,
                      2248
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 87
                      },
                      "start": {
                        "column": 45,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    2237,
                    2262
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 87
                    },
                    "start": {
                      "column": 45,
                      "line": 87
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 89
                },
                "start": {
                  "column": 19,
                  "line": 87
                }
              }
            },
            "range": [
              2193,
              2291
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 89
              },
              "start": {
                "column": 1,
                "line": 87
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
              "name": "mParameter",
              "optional": false,
              "range": [
                2296,
                2306
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 90
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
                2306,
                2376
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          2365,
                          2369
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 91
                          },
                          "start": {
                            "column": 15,
                            "line": 91
                          }
                        }
                      },
                      "range": [
                        2365,
                        2370
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 91
                        },
                        "start": {
                          "column": 15,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      2358,
                      2370
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 91
                      },
                      "start": {
                        "column": 8,
                        "line": 91
                      }
                    }
                  }
                ],
                "range": [
                  2348,
                  2376
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 92
                  },
                  "start": {
                    "column": 56,
                    "line": 90
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
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
                        "name": "name",
                        "optional": false,
                        "range": [
                          2309,
                          2313
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 90
                          },
                          "start": {
                            "column": 17,
                            "line": 90
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          2315,
                          2320
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 90
                          },
                          "start": {
                            "column": 23,
                            "line": 90
                          }
                        }
                      },
                      "range": [
                        2309,
                        2320
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 90
                        },
                        "start": {
                          "column": 17,
                          "line": 90
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 90
                      },
                      "start": {
                        "column": 30,
                        "line": 90
                      }
                    },
                    "range": [
                      2322,
                      2329
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Named",
                        "optional": false,
                        "range": [
                          2324,
                          2329
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 90
                          },
                          "start": {
                            "column": 32,
                            "line": 90
                          }
                        }
                      },
                      "range": [
                        2324,
                        2329
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 90
                        },
                        "start": {
                          "column": 32,
                          "line": 90
                        }
                      }
                    }
                  },
                  "range": [
                    2307,
                    2329
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 90
                    },
                    "start": {
                      "column": 15,
                      "line": 90
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 90
                      },
                      "start": {
                        "column": 40,
                        "line": 90
                      }
                    },
                    "range": [
                      2332,
                      2346
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          2341,
                          2346
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 90
                          },
                          "start": {
                            "column": 49,
                            "line": 90
                          }
                        }
                      },
                      "range": [
                        2334,
                        2346
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 90
                        },
                        "start": {
                          "column": 42,
                          "line": 90
                        }
                      }
                    }
                  },
                  "range": [
                    2331,
                    2346
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 90
                    },
                    "start": {
                      "column": 39,
                      "line": 90
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 92
                },
                "start": {
                  "column": 14,
                  "line": 90
                }
              }
            },
            "range": [
              2296,
              2376
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 34,
            "line": 77
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferencedInSignartureClass",
        "optional": false,
        "range": [
          1931,
          1958
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 77
          },
          "start": {
            "column": 6,
            "line": 77
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1925,
        2378
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 77
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
            "name": "notReferencedFnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 95
                },
                "start": {
                  "column": 23,
                  "line": 95
                }
              },
              "range": [
                2403,
                2437
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
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
                          "name": "name",
                          "optional": false,
                          "range": [
                            2408,
                            2412
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 95
                            },
                            "start": {
                              "column": 28,
                              "line": 95
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2414,
                            2419
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 95
                            },
                            "start": {
                              "column": 34,
                              "line": 95
                            }
                          }
                        },
                        "range": [
                          2408,
                          2419
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 95
                          },
                          "start": {
                            "column": 28,
                            "line": 95
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 95
                        },
                        "start": {
                          "column": 41,
                          "line": 95
                        }
                      },
                      "range": [
                        2421,
                        2428
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "range": [
                            2423,
                            2428
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 95
                            },
                            "start": {
                              "column": 43,
                              "line": 95
                            }
                          }
                        },
                        "range": [
                          2423,
                          2428
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 95
                          },
                          "start": {
                            "column": 43,
                            "line": 95
                          }
                        }
                      }
                    },
                    "range": [
                      2406,
                      2428
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 95
                      },
                      "start": {
                        "column": 26,
                        "line": 95
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 95
                    },
                    "start": {
                      "column": 50,
                      "line": 95
                    }
                  },
                  "range": [
                    2430,
                    2437
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      2433,
                      2437
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 95
                      },
                      "start": {
                        "column": 53,
                        "line": 95
                      }
                    }
                  }
                },
                "range": [
                  2405,
                  2437
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 95
                  },
                  "start": {
                    "column": 25,
                    "line": 95
                  }
                }
              }
            },
            "range": [
              2384,
              2437
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
              }
            }
          },
          "init": null,
          "range": [
            2384,
            2437
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 95
            },
            "start": {
              "column": 4,
              "line": 95
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2380,
        2438
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 95
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
            "name": "referencedInSignartureReturnTypeFnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 84,
                  "line": 96
                },
                "start": {
                  "column": 42,
                  "line": 96
                }
              },
              "range": [
                2481,
                2523
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
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
                          "name": "name",
                          "optional": false,
                          "range": [
                            2486,
                            2490
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 96
                            },
                            "start": {
                              "column": 47,
                              "line": 96
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2492,
                            2497
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 96
                            },
                            "start": {
                              "column": 53,
                              "line": 96
                            }
                          }
                        },
                        "range": [
                          2486,
                          2497
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 96
                          },
                          "start": {
                            "column": 47,
                            "line": 96
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 96
                        },
                        "start": {
                          "column": 60,
                          "line": 96
                        }
                      },
                      "range": [
                        2499,
                        2506
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "range": [
                            2501,
                            2506
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 96
                            },
                            "start": {
                              "column": 62,
                              "line": 96
                            }
                          }
                        },
                        "range": [
                          2501,
                          2506
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 96
                          },
                          "start": {
                            "column": 62,
                            "line": 96
                          }
                        }
                      }
                    },
                    "range": [
                      2484,
                      2506
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 96
                      },
                      "start": {
                        "column": 45,
                        "line": 96
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 96
                    },
                    "start": {
                      "column": 69,
                      "line": 96
                    }
                  },
                  "range": [
                    2508,
                    2523
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        2518,
                        2523
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 96
                        },
                        "start": {
                          "column": 79,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      2511,
                      2523
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 96
                      },
                      "start": {
                        "column": 72,
                        "line": 96
                      }
                    }
                  }
                },
                "range": [
                  2483,
                  2523
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 96
                  },
                  "start": {
                    "column": 44,
                    "line": 96
                  }
                }
              }
            },
            "range": [
              2443,
              2523
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          },
          "init": null,
          "range": [
            2443,
            2523
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 96
            },
            "start": {
              "column": 4,
              "line": 96
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2439,
        2524
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 96
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
            "name": "referencedInSignartureParamTypeFnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 92,
                  "line": 97
                },
                "start": {
                  "column": 41,
                  "line": 97
                }
              },
              "range": [
                2566,
                2617
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
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
                          "name": "name",
                          "optional": false,
                          "range": [
                            2571,
                            2575
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 97
                            },
                            "start": {
                              "column": 46,
                              "line": 97
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2577,
                            2582
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 97
                            },
                            "start": {
                              "column": 52,
                              "line": 97
                            }
                          }
                        },
                        "range": [
                          2571,
                          2582
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 97
                          },
                          "start": {
                            "column": 46,
                            "line": 97
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 97
                        },
                        "start": {
                          "column": 59,
                          "line": 97
                        }
                      },
                      "range": [
                        2584,
                        2591
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "range": [
                            2586,
                            2591
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 97
                            },
                            "start": {
                              "column": 61,
                              "line": 97
                            }
                          }
                        },
                        "range": [
                          2586,
                          2591
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 97
                          },
                          "start": {
                            "column": 61,
                            "line": 97
                          }
                        }
                      }
                    },
                    "range": [
                      2569,
                      2591
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 97
                      },
                      "start": {
                        "column": 44,
                        "line": 97
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 97
                        },
                        "start": {
                          "column": 69,
                          "line": 97
                        }
                      },
                      "range": [
                        2594,
                        2608
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2603,
                            2608
                          ],
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 97
                            },
                            "start": {
                              "column": 78,
                              "line": 97
                            }
                          }
                        },
                        "range": [
                          2596,
                          2608
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 97
                          },
                          "start": {
                            "column": 71,
                            "line": 97
                          }
                        }
                      }
                    },
                    "range": [
                      2593,
                      2608
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 97
                      },
                      "start": {
                        "column": 68,
                        "line": 97
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 97
                    },
                    "start": {
                      "column": 85,
                      "line": 97
                    }
                  },
                  "range": [
                    2610,
                    2617
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      2613,
                      2617
                    ],
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 97
                      },
                      "start": {
                        "column": 88,
                        "line": 97
                      }
                    }
                  }
                },
                "range": [
                  2568,
                  2617
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 97
                  },
                  "start": {
                    "column": 43,
                    "line": 97
                  }
                }
              }
            },
            "range": [
              2529,
              2617
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 97
              }
            }
          },
          "init": null,
          "range": [
            2529,
            2617
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 97
            },
            "start": {
              "column": 4,
              "line": 97
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2525,
        2618
      ],
      "loc": {
        "end": {
          "column": 93,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
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
            "name": "notReferencedCtorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 99
                },
                "start": {
                  "column": 25,
                  "line": 99
                }
              },
              "range": [
                2645,
                2683
              ],
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "params": [
                  {
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
                          "name": "name",
                          "optional": false,
                          "range": [
                            2654,
                            2658
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 99
                            },
                            "start": {
                              "column": 34,
                              "line": 99
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2660,
                            2665
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 99
                            },
                            "start": {
                              "column": 40,
                              "line": 99
                            }
                          }
                        },
                        "range": [
                          2654,
                          2665
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 99
                          },
                          "start": {
                            "column": 34,
                            "line": 99
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 99
                        },
                        "start": {
                          "column": 47,
                          "line": 99
                        }
                      },
                      "range": [
                        2667,
                        2674
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "range": [
                            2669,
                            2674
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 99
                            },
                            "start": {
                              "column": 49,
                              "line": 99
                            }
                          }
                        },
                        "range": [
                          2669,
                          2674
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 99
                          },
                          "start": {
                            "column": 49,
                            "line": 99
                          }
                        }
                      }
                    },
                    "range": [
                      2652,
                      2674
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 99
                      },
                      "start": {
                        "column": 32,
                        "line": 99
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 99
                    },
                    "start": {
                      "column": 56,
                      "line": 99
                    }
                  },
                  "range": [
                    2676,
                    2683
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      2679,
                      2683
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 99
                      },
                      "start": {
                        "column": 59,
                        "line": 99
                      }
                    }
                  }
                },
                "range": [
                  2647,
                  2683
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 99
                  },
                  "start": {
                    "column": 27,
                    "line": 99
                  }
                }
              }
            },
            "range": [
              2624,
              2683
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          },
          "init": null,
          "range": [
            2624,
            2683
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 99
            },
            "start": {
              "column": 4,
              "line": 99
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2620,
        2684
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
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
            "name": "referencedInSignartureReturnTypeCtorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 90,
                  "line": 100
                },
                "start": {
                  "column": 44,
                  "line": 100
                }
              },
              "range": [
                2729,
                2775
              ],
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "params": [
                  {
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
                          "name": "name",
                          "optional": false,
                          "range": [
                            2738,
                            2742
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 100
                            },
                            "start": {
                              "column": 53,
                              "line": 100
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2744,
                            2749
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 100
                            },
                            "start": {
                              "column": 59,
                              "line": 100
                            }
                          }
                        },
                        "range": [
                          2738,
                          2749
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 100
                          },
                          "start": {
                            "column": 53,
                            "line": 100
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 100
                        },
                        "start": {
                          "column": 66,
                          "line": 100
                        }
                      },
                      "range": [
                        2751,
                        2758
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "range": [
                            2753,
                            2758
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 100
                            },
                            "start": {
                              "column": 68,
                              "line": 100
                            }
                          }
                        },
                        "range": [
                          2753,
                          2758
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 100
                          },
                          "start": {
                            "column": 68,
                            "line": 100
                          }
                        }
                      }
                    },
                    "range": [
                      2736,
                      2758
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 100
                      },
                      "start": {
                        "column": 51,
                        "line": 100
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 100
                    },
                    "start": {
                      "column": 75,
                      "line": 100
                    }
                  },
                  "range": [
                    2760,
                    2775
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        2770,
                        2775
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 100
                        },
                        "start": {
                          "column": 85,
                          "line": 100
                        }
                      }
                    },
                    "range": [
                      2763,
                      2775
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 100
                      },
                      "start": {
                        "column": 78,
                        "line": 100
                      }
                    }
                  }
                },
                "range": [
                  2731,
                  2775
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 100
                  },
                  "start": {
                    "column": 46,
                    "line": 100
                  }
                }
              }
            },
            "range": [
              2689,
              2775
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
              }
            }
          },
          "init": null,
          "range": [
            2689,
            2775
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 100
            },
            "start": {
              "column": 4,
              "line": 100
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2685,
        2776
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
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
            "name": "referencedInSignartureParamTypeCtorType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 99,
                  "line": 101
                },
                "start": {
                  "column": 43,
                  "line": 101
                }
              },
              "range": [
                2820,
                2876
              ],
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "params": [
                  {
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
                          "name": "name",
                          "optional": false,
                          "range": [
                            2830,
                            2834
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 101
                            },
                            "start": {
                              "column": 53,
                              "line": 101
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2836,
                            2841
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 101
                            },
                            "start": {
                              "column": 59,
                              "line": 101
                            }
                          }
                        },
                        "range": [
                          2830,
                          2841
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 101
                          },
                          "start": {
                            "column": 53,
                            "line": 101
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 101
                        },
                        "start": {
                          "column": 66,
                          "line": 101
                        }
                      },
                      "range": [
                        2843,
                        2850
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "range": [
                            2845,
                            2850
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 101
                            },
                            "start": {
                              "column": 68,
                              "line": 101
                            }
                          }
                        },
                        "range": [
                          2845,
                          2850
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 101
                          },
                          "start": {
                            "column": 68,
                            "line": 101
                          }
                        }
                      }
                    },
                    "range": [
                      2828,
                      2850
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 101
                      },
                      "start": {
                        "column": 51,
                        "line": 101
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 101
                        },
                        "start": {
                          "column": 76,
                          "line": 101
                        }
                      },
                      "range": [
                        2853,
                        2867
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "alias",
                          "optional": false,
                          "range": [
                            2862,
                            2867
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 101
                            },
                            "start": {
                              "column": 85,
                              "line": 101
                            }
                          }
                        },
                        "range": [
                          2855,
                          2867
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 101
                          },
                          "start": {
                            "column": 78,
                            "line": 101
                          }
                        }
                      }
                    },
                    "range": [
                      2852,
                      2867
                    ],
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 101
                      },
                      "start": {
                        "column": 75,
                        "line": 101
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 101
                    },
                    "start": {
                      "column": 92,
                      "line": 101
                    }
                  },
                  "range": [
                    2869,
                    2876
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      2872,
                      2876
                    ],
                    "loc": {
                      "end": {
                        "column": 99,
                        "line": 101
                      },
                      "start": {
                        "column": 95,
                        "line": 101
                      }
                    }
                  }
                },
                "range": [
                  2822,
                  2876
                ],
                "loc": {
                  "end": {
                    "column": 99,
                    "line": 101
                  },
                  "start": {
                    "column": 45,
                    "line": 101
                  }
                }
              }
            },
            "range": [
              2781,
              2876
            ],
            "loc": {
              "end": {
                "column": 99,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          },
          "init": null,
          "range": [
            2781,
            2876
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 101
            },
            "start": {
              "column": 4,
              "line": 101
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2777,
        2877
      ],
      "loc": {
        "end": {
          "column": 100,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 101
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2913,
          3044
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        2919,
                        2923
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 105
                        },
                        "start": {
                          "column": 4,
                          "line": 105
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        2925,
                        2930
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 105
                        },
                        "start": {
                          "column": 10,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      2919,
                      2930
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 105
                      },
                      "start": {
                        "column": 4,
                        "line": 105
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 105
                    },
                    "start": {
                      "column": 17,
                      "line": 105
                    }
                  },
                  "range": [
                    2932,
                    2939
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        2934,
                        2939
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 105
                        },
                        "start": {
                          "column": 19,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      2934,
                      2939
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 105
                      },
                      "start": {
                        "column": 19,
                        "line": 105
                      }
                    }
                  }
                },
                "range": [
                  2917,
                  2939
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 105
                  },
                  "start": {
                    "column": 2,
                    "line": 105
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 105
                },
                "start": {
                  "column": 25,
                  "line": 105
                }
              },
              "range": [
                2940,
                2946
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  2942,
                  2946
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 105
                  },
                  "start": {
                    "column": 27,
                    "line": 105
                  }
                }
              }
            },
            "range": [
              2916,
              2946
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 105
              },
              "start": {
                "column": 1,
                "line": 105
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        2955,
                        2959
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 106
                        },
                        "start": {
                          "column": 8,
                          "line": 106
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        2961,
                        2966
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 106
                        },
                        "start": {
                          "column": 14,
                          "line": 106
                        }
                      }
                    },
                    "range": [
                      2955,
                      2966
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 106
                      },
                      "start": {
                        "column": 8,
                        "line": 106
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 106
                    },
                    "start": {
                      "column": 21,
                      "line": 106
                    }
                  },
                  "range": [
                    2968,
                    2975
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        2970,
                        2975
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 106
                        },
                        "start": {
                          "column": 23,
                          "line": 106
                        }
                      }
                    },
                    "range": [
                      2970,
                      2975
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 106
                      },
                      "start": {
                        "column": 23,
                        "line": 106
                      }
                    }
                  }
                },
                "range": [
                  2953,
                  2975
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 106
                  },
                  "start": {
                    "column": 6,
                    "line": 106
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 106
                },
                "start": {
                  "column": 29,
                  "line": 106
                }
              },
              "range": [
                2976,
                2982
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  2978,
                  2982
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 106
                  },
                  "start": {
                    "column": 31,
                    "line": 106
                  }
                }
              }
            },
            "range": [
              2948,
              2982
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 106
              },
              "start": {
                "column": 1,
                "line": 106
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2988,
                2989
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 107
                },
                "start": {
                  "column": 5,
                  "line": 107
                }
              }
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        2992,
                        2996
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 107
                        },
                        "start": {
                          "column": 9,
                          "line": 107
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        2998,
                        3003
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 107
                        },
                        "start": {
                          "column": 15,
                          "line": 107
                        }
                      }
                    },
                    "range": [
                      2992,
                      3003
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 107
                      },
                      "start": {
                        "column": 9,
                        "line": 107
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 107
                    },
                    "start": {
                      "column": 22,
                      "line": 107
                    }
                  },
                  "range": [
                    3005,
                    3012
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        3007,
                        3012
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 107
                        },
                        "start": {
                          "column": 24,
                          "line": 107
                        }
                      }
                    },
                    "range": [
                      3007,
                      3012
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 107
                      },
                      "start": {
                        "column": 24,
                        "line": 107
                      }
                    }
                  }
                },
                "range": [
                  2990,
                  3012
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 107
                  },
                  "start": {
                    "column": 7,
                    "line": 107
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              2984,
              3014
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 107
              },
              "start": {
                "column": 1,
                "line": 107
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                3016,
                3017
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 108
                },
                "start": {
                  "column": 1,
                  "line": 108
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        3020,
                        3024
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 108
                        },
                        "start": {
                          "column": 5,
                          "line": 108
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3026,
                        3031
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 108
                        },
                        "start": {
                          "column": 11,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      3020,
                      3031
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 108
                      },
                      "start": {
                        "column": 5,
                        "line": 108
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 108
                    },
                    "start": {
                      "column": 18,
                      "line": 108
                    }
                  },
                  "range": [
                    3033,
                    3040
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        3035,
                        3040
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 108
                        },
                        "start": {
                          "column": 20,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      3035,
                      3040
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 108
                      },
                      "start": {
                        "column": 20,
                        "line": 108
                      }
                    }
                  }
                },
                "range": [
                  3018,
                  3040
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 108
                  },
                  "start": {
                    "column": 3,
                    "line": 108
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              3016,
              3042
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 108
              },
              "start": {
                "column": 1,
                "line": 108
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 109
          },
          "start": {
            "column": 33,
            "line": 104
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotReferencedInterface",
        "optional": false,
        "range": [
          2890,
          2912
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 104
          },
          "start": {
            "column": 10,
            "line": 104
          }
        }
      },
      "range": [
        2880,
        3044
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 104
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3088,
          3513
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        3094,
                        3098
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 112
                        },
                        "start": {
                          "column": 4,
                          "line": 112
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3100,
                        3105
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 112
                        },
                        "start": {
                          "column": 10,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      3094,
                      3105
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 112
                      },
                      "start": {
                        "column": 4,
                        "line": 112
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 112
                    },
                    "start": {
                      "column": 17,
                      "line": 112
                    }
                  },
                  "range": [
                    3107,
                    3114
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        3109,
                        3114
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 112
                        },
                        "start": {
                          "column": 19,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      3109,
                      3114
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 112
                      },
                      "start": {
                        "column": 19,
                        "line": 112
                      }
                    }
                  }
                },
                "range": [
                  3092,
                  3114
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 112
                  },
                  "start": {
                    "column": 2,
                    "line": 112
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 112
                    },
                    "start": {
                      "column": 27,
                      "line": 112
                    }
                  },
                  "range": [
                    3117,
                    3131
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3126,
                        3131
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 112
                        },
                        "start": {
                          "column": 36,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      3119,
                      3131
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 112
                      },
                      "start": {
                        "column": 29,
                        "line": 112
                      }
                    }
                  }
                },
                "range": [
                  3116,
                  3131
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 112
                  },
                  "start": {
                    "column": 26,
                    "line": 112
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 112
                },
                "start": {
                  "column": 42,
                  "line": 112
                }
              },
              "range": [
                3132,
                3138
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  3134,
                  3138
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 112
                  },
                  "start": {
                    "column": 44,
                    "line": 112
                  }
                }
              }
            },
            "range": [
              3091,
              3138
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 112
              },
              "start": {
                "column": 1,
                "line": 112
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        3143,
                        3147
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 113
                        },
                        "start": {
                          "column": 4,
                          "line": 113
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3149,
                        3154
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 113
                        },
                        "start": {
                          "column": 10,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      3143,
                      3154
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 113
                      },
                      "start": {
                        "column": 4,
                        "line": 113
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 113
                    },
                    "start": {
                      "column": 17,
                      "line": 113
                    }
                  },
                  "range": [
                    3156,
                    3163
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        3158,
                        3163
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 113
                        },
                        "start": {
                          "column": 19,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      3158,
                      3163
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 113
                      },
                      "start": {
                        "column": 19,
                        "line": 113
                      }
                    }
                  }
                },
                "range": [
                  3141,
                  3163
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 113
                  },
                  "start": {
                    "column": 2,
                    "line": 113
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 113
                },
                "start": {
                  "column": 25,
                  "line": 113
                }
              },
              "range": [
                3164,
                3178
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "range": [
                    3173,
                    3178
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 113
                    },
                    "start": {
                      "column": 34,
                      "line": 113
                    }
                  }
                },
                "range": [
                  3166,
                  3178
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 113
                  },
                  "start": {
                    "column": 27,
                    "line": 113
                  }
                }
              }
            },
            "range": [
              3140,
              3178
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 113
              },
              "start": {
                "column": 1,
                "line": 113
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        3189,
                        3193
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 115
                        },
                        "start": {
                          "column": 8,
                          "line": 115
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3195,
                        3200
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 115
                        },
                        "start": {
                          "column": 14,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      3189,
                      3200
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 115
                      },
                      "start": {
                        "column": 8,
                        "line": 115
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 115
                    },
                    "start": {
                      "column": 21,
                      "line": 115
                    }
                  },
                  "range": [
                    3202,
                    3209
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        3204,
                        3209
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 115
                        },
                        "start": {
                          "column": 23,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      3204,
                      3209
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 115
                      },
                      "start": {
                        "column": 23,
                        "line": 115
                      }
                    }
                  }
                },
                "range": [
                  3187,
                  3209
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 115
                  },
                  "start": {
                    "column": 6,
                    "line": 115
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 115
                    },
                    "start": {
                      "column": 31,
                      "line": 115
                    }
                  },
                  "range": [
                    3212,
                    3226
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3221,
                        3226
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 115
                        },
                        "start": {
                          "column": 40,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      3214,
                      3226
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 115
                      },
                      "start": {
                        "column": 33,
                        "line": 115
                      }
                    }
                  }
                },
                "range": [
                  3211,
                  3226
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 115
                  },
                  "start": {
                    "column": 30,
                    "line": 115
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 115
                },
                "start": {
                  "column": 46,
                  "line": 115
                }
              },
              "range": [
                3227,
                3233
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  3229,
                  3233
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 115
                  },
                  "start": {
                    "column": 48,
                    "line": 115
                  }
                }
              }
            },
            "range": [
              3182,
              3233
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 115
              },
              "start": {
                "column": 1,
                "line": 115
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        3242,
                        3246
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 116
                        },
                        "start": {
                          "column": 8,
                          "line": 116
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3248,
                        3253
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 116
                        },
                        "start": {
                          "column": 14,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      3242,
                      3253
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 116
                      },
                      "start": {
                        "column": 8,
                        "line": 116
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 116
                    },
                    "start": {
                      "column": 21,
                      "line": 116
                    }
                  },
                  "range": [
                    3255,
                    3262
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        3257,
                        3262
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 116
                        },
                        "start": {
                          "column": 23,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      3257,
                      3262
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 116
                      },
                      "start": {
                        "column": 23,
                        "line": 116
                      }
                    }
                  }
                },
                "range": [
                  3240,
                  3262
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 116
                  },
                  "start": {
                    "column": 6,
                    "line": 116
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 116
                },
                "start": {
                  "column": 29,
                  "line": 116
                }
              },
              "range": [
                3263,
                3277
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "range": [
                    3272,
                    3277
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 116
                    },
                    "start": {
                      "column": 38,
                      "line": 116
                    }
                  }
                },
                "range": [
                  3265,
                  3277
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 116
                  },
                  "start": {
                    "column": 31,
                    "line": 116
                  }
                }
              }
            },
            "range": [
              3235,
              3277
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 116
              },
              "start": {
                "column": 1,
                "line": 116
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                3283,
                3284
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 117
                },
                "start": {
                  "column": 5,
                  "line": 117
                }
              }
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        3287,
                        3291
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 117
                        },
                        "start": {
                          "column": 9,
                          "line": 117
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3293,
                        3298
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 117
                        },
                        "start": {
                          "column": 15,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      3287,
                      3298
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 117
                      },
                      "start": {
                        "column": 9,
                        "line": 117
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 117
                    },
                    "start": {
                      "column": 22,
                      "line": 117
                    }
                  },
                  "range": [
                    3300,
                    3329
                  ],
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Named",
                          "optional": false,
                          "range": [
                            3302,
                            3307
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 117
                            },
                            "start": {
                              "column": 24,
                              "line": 117
                            }
                          }
                        },
                        "range": [
                          3302,
                          3307
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 117
                          },
                          "start": {
                            "column": 24,
                            "line": 117
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
                              "name": "o",
                              "optional": false,
                              "range": [
                                3312,
                                3313
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 117
                                },
                                "start": {
                                  "column": 34,
                                  "line": 117
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
                                  "column": 49,
                                  "line": 117
                                },
                                "start": {
                                  "column": 35,
                                  "line": 117
                                }
                              },
                              "range": [
                                3313,
                                3327
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "alias",
                                  "optional": false,
                                  "range": [
                                    3322,
                                    3327
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 117
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 117
                                    }
                                  }
                                },
                                "range": [
                                  3315,
                                  3327
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 117
                                  }
                                }
                              }
                            },
                            "range": [
                              3312,
                              3327
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 117
                              },
                              "start": {
                                "column": 34,
                                "line": 117
                              }
                            }
                          }
                        ],
                        "range": [
                          3310,
                          3329
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 117
                          },
                          "start": {
                            "column": 32,
                            "line": 117
                          }
                        }
                      }
                    ],
                    "range": [
                      3302,
                      3329
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 117
                      },
                      "start": {
                        "column": 24,
                        "line": 117
                      }
                    }
                  }
                },
                "range": [
                  3285,
                  3329
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 117
                  },
                  "start": {
                    "column": 7,
                    "line": 117
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              3279,
              3330
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 117
              },
              "start": {
                "column": 1,
                "line": 117
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mReturnType",
              "optional": false,
              "range": [
                3332,
                3343
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 118
                },
                "start": {
                  "column": 1,
                  "line": 118
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        3346,
                        3350
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 118
                        },
                        "start": {
                          "column": 15,
                          "line": 118
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3352,
                        3357
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 118
                        },
                        "start": {
                          "column": 21,
                          "line": 118
                        }
                      }
                    },
                    "range": [
                      3346,
                      3357
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 118
                      },
                      "start": {
                        "column": 15,
                        "line": 118
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 118
                    },
                    "start": {
                      "column": 28,
                      "line": 118
                    }
                  },
                  "range": [
                    3359,
                    3366
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        3361,
                        3366
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 118
                        },
                        "start": {
                          "column": 30,
                          "line": 118
                        }
                      }
                    },
                    "range": [
                      3361,
                      3366
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 118
                      },
                      "start": {
                        "column": 30,
                        "line": 118
                      }
                    }
                  }
                },
                "range": [
                  3344,
                  3366
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 118
                  },
                  "start": {
                    "column": 13,
                    "line": 118
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 118
                },
                "start": {
                  "column": 36,
                  "line": 118
                }
              },
              "range": [
                3367,
                3381
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alias",
                  "optional": false,
                  "range": [
                    3376,
                    3381
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 118
                    },
                    "start": {
                      "column": 45,
                      "line": 118
                    }
                  }
                },
                "range": [
                  3369,
                  3381
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 118
                  },
                  "start": {
                    "column": 38,
                    "line": 118
                  }
                }
              }
            },
            "static": false,
            "range": [
              3332,
              3382
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 118
              },
              "start": {
                "column": 1,
                "line": 118
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mRerturnTypeNested",
              "optional": false,
              "range": [
                3384,
                3402
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 119
                },
                "start": {
                  "column": 1,
                  "line": 119
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        3405,
                        3409
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 119
                        },
                        "start": {
                          "column": 22,
                          "line": 119
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3411,
                        3416
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 119
                        },
                        "start": {
                          "column": 28,
                          "line": 119
                        }
                      }
                    },
                    "range": [
                      3405,
                      3416
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 119
                      },
                      "start": {
                        "column": 22,
                        "line": 119
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 119
                    },
                    "start": {
                      "column": 35,
                      "line": 119
                    }
                  },
                  "range": [
                    3418,
                    3425
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        3420,
                        3425
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 119
                        },
                        "start": {
                          "column": 37,
                          "line": 119
                        }
                      }
                    },
                    "range": [
                      3420,
                      3425
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 119
                      },
                      "start": {
                        "column": 37,
                        "line": 119
                      }
                    }
                  }
                },
                "range": [
                  3403,
                  3425
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 119
                  },
                  "start": {
                    "column": 20,
                    "line": 119
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 119
                },
                "start": {
                  "column": 43,
                  "line": 119
                }
              },
              "range": [
                3426,
                3453
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    3439,
                    3453
                  ],
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "alias",
                        "optional": false,
                        "range": [
                          3447,
                          3452
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 119
                          },
                          "start": {
                            "column": 64,
                            "line": 119
                          }
                        }
                      },
                      "range": [
                        3440,
                        3452
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 119
                        },
                        "start": {
                          "column": 57,
                          "line": 119
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 119
                    },
                    "start": {
                      "column": 56,
                      "line": 119
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "range": [
                    3428,
                    3439
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 119
                    },
                    "start": {
                      "column": 45,
                      "line": 119
                    }
                  }
                },
                "range": [
                  3428,
                  3453
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 119
                  },
                  "start": {
                    "column": 45,
                    "line": 119
                  }
                }
              }
            },
            "static": false,
            "range": [
              3384,
              3454
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 119
              },
              "start": {
                "column": 1,
                "line": 119
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mParameter",
              "optional": false,
              "range": [
                3459,
                3469
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 120
                },
                "start": {
                  "column": 4,
                  "line": 120
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
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
                      "name": "name",
                      "optional": false,
                      "range": [
                        3472,
                        3476
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 120
                        },
                        "start": {
                          "column": 17,
                          "line": 120
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3478,
                        3483
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 120
                        },
                        "start": {
                          "column": 23,
                          "line": 120
                        }
                      }
                    },
                    "range": [
                      3472,
                      3483
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 120
                      },
                      "start": {
                        "column": 17,
                        "line": 120
                      }
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 120
                    },
                    "start": {
                      "column": 30,
                      "line": 120
                    }
                  },
                  "range": [
                    3485,
                    3492
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Named",
                      "optional": false,
                      "range": [
                        3487,
                        3492
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 120
                        },
                        "start": {
                          "column": 32,
                          "line": 120
                        }
                      }
                    },
                    "range": [
                      3487,
                      3492
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 120
                      },
                      "start": {
                        "column": 32,
                        "line": 120
                      }
                    }
                  }
                },
                "range": [
                  3470,
                  3492
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 120
                  },
                  "start": {
                    "column": 15,
                    "line": 120
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 120
                    },
                    "start": {
                      "column": 40,
                      "line": 120
                    }
                  },
                  "range": [
                    3495,
                    3509
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alias",
                      "optional": false,
                      "range": [
                        3504,
                        3509
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 120
                        },
                        "start": {
                          "column": 49,
                          "line": 120
                        }
                      }
                    },
                    "range": [
                      3497,
                      3509
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 120
                      },
                      "start": {
                        "column": 42,
                        "line": 120
                      }
                    }
                  }
                },
                "range": [
                  3494,
                  3509
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 120
                  },
                  "start": {
                    "column": 39,
                    "line": 120
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              3459,
              3511
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 121
          },
          "start": {
            "column": 42,
            "line": 111
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReferencedInSignartureInterface",
        "optional": false,
        "range": [
          3056,
          3087
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 111
          },
          "start": {
            "column": 10,
            "line": 111
          }
        }
      },
      "range": [
        3046,
        3513
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 121
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 121
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
