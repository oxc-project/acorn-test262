__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    371,
    835
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          386,
          433
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                392,
                396
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
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              },
              "range": [
                396,
                404
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  398,
                  404
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
              }
            },
            "range": [
              392,
              405
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "description",
              "optional": false,
              "range": [
                410,
                421
              ],
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
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              },
              "range": [
                422,
                430
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  424,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              410,
              431
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 8
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
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "range": [
          381,
          385
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
      "range": [
        371,
        433
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
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
        "name": "foo",
        "optional": false,
        "range": [
          452,
          455
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 11
              },
              "start": {
                "column": 25,
                "line": 11
              }
            },
            "range": [
              460,
              466
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Item",
                "optional": false,
                "range": [
                  462,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              },
              "range": [
                462,
                466
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 11
                }
              }
            }
          },
          "range": [
            456,
            466
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 11
            },
            "start": {
              "column": 21,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 11
          },
          "start": {
            "column": 32,
            "line": 11
          }
        },
        "range": [
          467,
          475
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            469,
            475
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 11
            },
            "start": {
              "column": 34,
              "line": 11
            }
          }
        }
      },
      "range": [
        435,
        476
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
        "name": "foo",
        "optional": false,
        "range": [
          494,
          497
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 12
              },
              "start": {
                "column": 25,
                "line": 12
              }
            },
            "range": [
              502,
              507
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                504,
                507
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 12
                },
                "start": {
                  "column": 27,
                  "line": 12
                }
              }
            }
          },
          "range": [
            498,
            507
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 12
            },
            "start": {
              "column": 21,
              "line": 12
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 12
          },
          "start": {
            "column": 31,
            "line": 12
          }
        },
        "range": [
          508,
          516
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            510,
            516
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 12
            },
            "start": {
              "column": 33,
              "line": 12
            }
          }
        }
      },
      "range": [
        477,
        517
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "x",
            "optional": false,
            "range": [
              523,
              524
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
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
                        533,
                        537
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 14
                        },
                        "start": {
                          "column": 14,
                          "line": 14
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"Sprocket\"",
                      "value": "Sprocket",
                      "range": [
                        539,
                        549
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 14
                        },
                        "start": {
                          "column": 20,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      533,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 14
                      },
                      "start": {
                        "column": 14,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  531,
                  551
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 14
                  },
                  "start": {
                    "column": 12,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                527,
                530
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              527,
              552
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "range": [
            523,
            552
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        519,
        553
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 15
                }
              },
              "range": [
                559,
                567
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  561,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 15
                  },
                  "start": {
                    "column": 7,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              558,
              567
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
          "init": null,
          "range": [
            558,
            567
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        554,
        568
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
              574,
              575
            ],
            "loc": {
              "end": {
                "column": 5,
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
            "arguments": [
              {
                "type": "ObjectExpression",
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
                        584,
                        588
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
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"Sprocket\"",
                      "value": "Sprocket",
                      "range": [
                        590,
                        600
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 17
                        },
                        "start": {
                          "column": 20,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      584,
                      600
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 17
                      },
                      "start": {
                        "column": 14,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "description",
                      "optional": false,
                      "range": [
                        602,
                        613
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 17
                        },
                        "start": {
                          "column": 32,
                          "line": 17
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"Bumpy wheel\"",
                      "value": "Bumpy wheel",
                      "range": [
                        615,
                        628
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 17
                        },
                        "start": {
                          "column": 45,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      602,
                      628
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 17
                      },
                      "start": {
                        "column": 32,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  582,
                  630
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                578,
                581
              ],
              "loc": {
                "end": {
                  "column": 11,
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
              578,
              631
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          "range": [
            574,
            631
          ],
          "loc": {
            "end": {
              "column": 61,
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
        570,
        632
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                638,
                646
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  640,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              637,
              646
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            637,
            646
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 18
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
        633,
        647
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
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              653,
              654
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
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
                        663,
                        667
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 20
                        },
                        "start": {
                          "column": 14,
                          "line": 20
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"Sprocket\"",
                      "value": "Sprocket",
                      "range": [
                        669,
                        679
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
                    },
                    "range": [
                      663,
                      679
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 20
                      },
                      "start": {
                        "column": 14,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "description",
                      "optional": false,
                      "range": [
                        681,
                        692
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 20
                        },
                        "start": {
                          "column": 32,
                          "line": 20
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        694,
                        699
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 20
                        },
                        "start": {
                          "column": 45,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      681,
                      699
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 20
                      },
                      "start": {
                        "column": 32,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  661,
                  701
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                657,
                660
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              657,
              702
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            653,
            702
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        649,
        703
      ],
      "loc": {
        "end": {
          "column": 54,
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 21
                },
                "start": {
                  "column": 5,
                  "line": 21
                }
              },
              "range": [
                709,
                717
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  711,
                  717
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              708,
              717
            ],
            "loc": {
              "end": {
                "column": 13,
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
            708,
            717
          ],
          "loc": {
            "end": {
              "column": 13,
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
        704,
        718
      ],
      "loc": {
        "end": {
          "column": 14,
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
            "name": "w",
            "optional": false,
            "range": [
              724,
              725
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        734,
                        735
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 23
                        },
                        "start": {
                          "column": 14,
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
                      "raw": "10",
                      "value": 10,
                      "range": [
                        737,
                        739
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 17,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      734,
                      739
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 14,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  732,
                  741
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 23
                  },
                  "start": {
                    "column": 12,
                    "line": 23
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                728,
                731
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              728,
              742
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "range": [
            724,
            742
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        720,
        743
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 24
                },
                "start": {
                  "column": 5,
                  "line": 24
                }
              },
              "range": [
                749,
                757
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  751,
                  757
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 24
                  },
                  "start": {
                    "column": 7,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              748,
              757
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            748,
            757
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        744,
        758
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
        "name": "bar",
        "optional": false,
        "range": [
          777,
          780
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 26
          },
          "start": {
            "column": 17,
            "line": 26
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 26
              },
              "start": {
                "column": 29,
                "line": 26
              }
            },
            "range": [
              789,
              800
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      793,
                      794
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 26
                      },
                      "start": {
                        "column": 33,
                        "line": 26
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 26
                      },
                      "start": {
                        "column": 35,
                        "line": 26
                      }
                    },
                    "range": [
                      795,
                      798
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          797,
                          798
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 26
                          },
                          "start": {
                            "column": 37,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        797,
                        798
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 26
                        },
                        "start": {
                          "column": 37,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    793,
                    798
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 26
                    },
                    "start": {
                      "column": 33,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                791,
                800
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 26
                },
                "start": {
                  "column": 31,
                  "line": 26
                }
              }
            }
          },
          "range": [
            784,
            800
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 26
            },
            "start": {
              "column": 24,
              "line": 26
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 26
          },
          "start": {
            "column": 41,
            "line": 26
          }
        },
        "range": [
          801,
          804
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              803,
              804
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 26
              },
              "start": {
                "column": 43,
                "line": 26
              }
            }
          },
          "range": [
            803,
            804
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 26
            },
            "start": {
              "column": 43,
              "line": 26
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 26
          },
          "start": {
            "column": 20,
            "line": 26
          }
        },
        "range": [
          780,
          783
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
                781,
                782
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 26
                },
                "start": {
                  "column": 21,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              781,
              782
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 26
              },
              "start": {
                "column": 21,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        760,
        805
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "name": "b",
            "optional": false,
            "range": [
              811,
              812
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  819,
                  821
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 28
                  },
                  "start": {
                    "column": 12,
                    "line": 28
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                815,
                818
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              815,
              822
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          },
          "range": [
            811,
            822
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        807,
        823
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 5,
                  "line": 29
                }
              },
              "range": [
                829,
                833
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  831,
                  833
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 29
                  },
                  "start": {
                    "column": 7,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              828,
              833
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": null,
          "range": [
            828,
            833
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        824,
        834
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 6
    }
  },
  "hashbang": null
}
```
