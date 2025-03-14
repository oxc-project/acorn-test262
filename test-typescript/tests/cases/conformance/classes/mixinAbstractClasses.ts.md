__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    799
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
            "abstract": true,
            "body": {
              "type": "ClassBody",
              "range": [
                259,
                300
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
                      269,
                      280
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                      280,
                      294
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        283,
                        294
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 22,
                          "line": 7
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
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    269,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 65,
                  "line": 6
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
                213,
                223
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
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
                    253,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 6
                    },
                    "start": {
                      "column": 59,
                      "line": 6
                    }
                  }
                },
                "range": [
                  253,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 6
                  },
                  "start": {
                    "column": 59,
                    "line": 6
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
                232,
                241
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 6
                },
                "start": {
                  "column": 38,
                  "line": 6
                }
              }
            },
            "range": [
              198,
              300
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 6
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
                312,
                322
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              305,
              323
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          192,
          325
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
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
        325
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
          346,
          369
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseMethod",
              "optional": false,
              "range": [
                352,
                362
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                362,
                367
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  365,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 14
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
                  "column": 19,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 14
                }
              }
            },
            "range": [
              352,
              367
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 19,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteBase",
        "optional": false,
        "range": [
          333,
          345
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        327,
        369
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          399,
          443
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
                414,
                432
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
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
                432,
                441
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
                    "line": 18
                  },
                  "start": {
                    "column": 33,
                    "line": 18
                  }
                },
                "range": [
                  434,
                  440
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    436,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 18
                    },
                    "start": {
                      "column": 35,
                      "line": 18
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 40,
                  "line": 18
                },
                "start": {
                  "column": 31,
                  "line": 18
                }
              }
            },
            "range": [
              405,
              441
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
            "column": 28,
            "line": 17
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
          386,
          398
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        371,
        443
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          499,
          502
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 54,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedFromConcrete",
        "optional": false,
        "range": [
          451,
          470
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ConcreteBase",
            "optional": false,
            "range": [
              485,
              497
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 21
              },
              "start": {
                "column": 40,
                "line": 21
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
            479,
            484
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 21
            },
            "start": {
              "column": 34,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          479,
          498
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 21
          },
          "start": {
            "column": 34,
            "line": 21
          }
        }
      },
      "range": [
        445,
        502
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "range": [
              510,
              521
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedFromConcrete",
              "optional": false,
              "range": [
                528,
                547
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 24
                },
                "start": {
                  "column": 24,
                  "line": 24
                }
              }
            },
            "range": [
              524,
              549
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 24
              },
              "start": {
                "column": 20,
                "line": 24
              }
            }
          },
          "range": [
            510,
            549
          ],
          "loc": {
            "end": {
              "column": 45,
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
        504,
        550
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "range": [
              551,
              562
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baseMethod",
            "optional": false,
            "range": [
              563,
              573
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 25
              },
              "start": {
                "column": 12,
                "line": 25
              }
            }
          },
          "range": [
            551,
            573
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          551,
          575
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
      "range": [
        551,
        576
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "range": [
              577,
              588
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixinMethod",
            "optional": false,
            "range": [
              589,
              600
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 26
              },
              "start": {
                "column": 12,
                "line": 26
              }
            }
          },
          "range": [
            577,
            600
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          577,
          602
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        577,
        603
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          659,
          690
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "abstractBaseMethod",
              "optional": false,
              "range": [
                665,
                683
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
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
                683,
                688
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  686,
                  688
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 29
                  },
                  "start": {
                    "column": 25,
                    "line": 29
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
                  "column": 27,
                  "line": 29
                },
                "start": {
                  "column": 22,
                  "line": 29
                }
              }
            },
            "range": [
              665,
              688
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 54,
            "line": 28
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
          611,
          630
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 28
          },
          "start": {
            "column": 6,
            "line": 28
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "AbstractBase",
            "optional": false,
            "range": [
              645,
              657
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 28
              },
              "start": {
                "column": 40,
                "line": 28
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
            639,
            644
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 28
            },
            "start": {
              "column": 34,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          639,
          658
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 28
          },
          "start": {
            "column": 34,
            "line": 28
          }
        }
      },
      "range": [
        605,
        690
      ],
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "range": [
              698,
              709
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedFromAbstract",
              "optional": false,
              "range": [
                716,
                735
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 32
                },
                "start": {
                  "column": 24,
                  "line": 32
                }
              }
            },
            "range": [
              712,
              737
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 32
              },
              "start": {
                "column": 20,
                "line": 32
              }
            }
          },
          "range": [
            698,
            737
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        692,
        738
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "range": [
              739,
              750
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 33
              },
              "start": {
                "column": 0,
                "line": 33
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "abstractBaseMethod",
            "optional": false,
            "range": [
              751,
              769
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 33
              },
              "start": {
                "column": 12,
                "line": 33
              }
            }
          },
          "range": [
            739,
            769
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "optional": false,
        "range": [
          739,
          771
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        739,
        772
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "range": [
              773,
              784
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 34
              },
              "start": {
                "column": 0,
                "line": 34
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixinMethod",
            "optional": false,
            "range": [
              785,
              796
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 34
              },
              "start": {
                "column": 12,
                "line": 34
              }
            }
          },
          "range": [
            773,
            796
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "optional": false,
        "range": [
          773,
          798
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        773,
        799
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 26,
      "line": 34
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
