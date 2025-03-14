__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    873
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          16,
          44
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixinMethod",
              "optional": false,
              "range": [
                22,
                33
              ],
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
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              },
              "range": [
                35,
                41
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  37,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              22,
              42
            ],
            "loc": {
              "end": {
                "column": 24,
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
            "column": 16,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "range": [
          10,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        44
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                398,
                439
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mixinMethod",
                    "optional": false,
                    "range": [
                      408,
                      419
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
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
                      419,
                      433
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        422,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 9
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
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    408,
                    433
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 56,
                  "line": 7
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "range": [
                352,
                362
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mixin",
                  "optional": false,
                  "range": [
                    392,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 7
                    },
                    "start": {
                      "column": 50,
                      "line": 7
                    }
                  }
                },
                "range": [
                  392,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 7
                  },
                  "start": {
                    "column": 50,
                    "line": 7
                  }
                }
              }
            ],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "range": [
                371,
                380
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            "range": [
              346,
              439
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "range": [
                451,
                461
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              444,
              462
            ],
            "loc": {
              "end": {
                "column": 22,
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
          192,
          464
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 146,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "range": [
          55,
          60
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 91,
                "line": 5
              },
              "start": {
                "column": 79,
                "line": 5
              }
            },
            "range": [
              125,
              137
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "range": [
                  127,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 5
                  },
                  "start": {
                    "column": 81,
                    "line": 5
                  }
                }
              },
              "range": [
                127,
                137
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 5
                },
                "start": {
                  "column": 81,
                  "line": 5
                }
              }
            }
          },
          "range": [
            116,
            137
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 5
            },
            "start": {
              "column": 70,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 145,
            "line": 5
          },
          "start": {
            "column": 92,
            "line": 5
          }
        },
        "range": [
          138,
          191
        ],
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "range": [
                  140,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 5
                  },
                  "start": {
                    "column": 94,
                    "line": 5
                  }
                }
              },
              "range": [
                140,
                150
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 5
                },
                "start": {
                  "column": 94,
                  "line": 5
                }
              }
            },
            {
              "type": "TSConstructorType",
              "abstract": true,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      171,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 129,
                        "line": 5
                      },
                      "start": {
                        "column": 125,
                        "line": 5
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 134,
                        "line": 5
                      },
                      "start": {
                        "column": 129,
                        "line": 5
                      }
                    },
                    "range": [
                      175,
                      180
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        177,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 134,
                          "line": 5
                        },
                        "start": {
                          "column": 131,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    168,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 134,
                      "line": 5
                    },
                    "start": {
                      "column": 122,
                      "line": 5
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 144,
                    "line": 5
                  },
                  "start": {
                    "column": 136,
                    "line": 5
                  }
                },
                "range": [
                  182,
                  190
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixin",
                    "optional": false,
                    "range": [
                      185,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 144,
                        "line": 5
                      },
                      "start": {
                        "column": 139,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    185,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 144,
                      "line": 5
                    },
                    "start": {
                      "column": 139,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                154,
                190
              ],
              "loc": {
                "end": {
                  "column": 144,
                  "line": 5
                },
                "start": {
                  "column": 108,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            140,
            191
          ],
          "loc": {
            "end": {
              "column": 145,
              "line": 5
            },
            "start": {
              "column": 94,
              "line": 5
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 69,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 5
          }
        },
        "range": [
          60,
          115
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSConstructorType",
              "abstract": true,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      97,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 5
                      },
                      "start": {
                        "column": 51,
                        "line": 5
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 5
                      },
                      "start": {
                        "column": 55,
                        "line": 5
                      }
                    },
                    "range": [
                      101,
                      106
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        103,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 5
                        },
                        "start": {
                          "column": 57,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    94,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 5
                    },
                    "start": {
                      "column": 48,
                      "line": 5
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 5
                  },
                  "start": {
                    "column": 62,
                    "line": 5
                  }
                },
                "range": [
                  108,
                  114
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    111,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
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
                80,
                114
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBaseClass",
              "optional": false,
              "range": [
                61,
                71
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              61,
              114
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 5
              },
              "start": {
                "column": 15,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        46,
        464
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          494,
          538
        ],
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "abstractBaseMethod",
              "optional": false,
              "range": [
                509,
                527
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                527,
                536
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 15
                  },
                  "start": {
                    "column": 33,
                    "line": 15
                  }
                },
                "range": [
                  529,
                  535
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    531,
                    535
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 15
                    },
                    "start": {
                      "column": 35,
                      "line": 15
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 40,
                  "line": 15
                },
                "start": {
                  "column": 31,
                  "line": 15
                }
              }
            },
            "range": [
              500,
              536
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
            "column": 28,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractBase",
        "optional": false,
        "range": [
          481,
          493
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 14
          },
          "start": {
            "column": 15,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        466,
        538
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MixedBase",
            "optional": false,
            "range": [
              546,
              555
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractBase",
                "optional": false,
                "range": [
                  564,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 18
                  },
                  "start": {
                    "column": 24,
                    "line": 18
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixin",
              "optional": false,
              "range": [
                558,
                563
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 18
                },
                "start": {
                  "column": 18,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              558,
              577
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 18
              },
              "start": {
                "column": 18,
                "line": 18
              }
            }
          },
          "range": [
            546,
            577
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        540,
        578
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          785,
          788
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 44,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedFromAbstract",
        "optional": false,
        "range": [
          747,
          766
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MixedBase",
        "optional": false,
        "range": [
          775,
          784
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 21
          },
          "start": {
            "column": 34,
            "line": 21
          }
        }
      },
      "range": [
        741,
        788
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MixedBase",
          "optional": false,
          "range": [
            861,
            870
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        "range": [
          857,
          872
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        857,
        873
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 16,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
