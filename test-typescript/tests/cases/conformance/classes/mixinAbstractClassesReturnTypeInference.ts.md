__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    620
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          17,
          45
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
                23,
                34
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
                36,
                42
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  38,
                  42
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
              23,
              43
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
            "column": 17,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin1",
        "optional": false,
        "range": [
          10,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
        45
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
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          75,
          119
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
                90,
                108
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
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
                108,
                117
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
                    "line": 6
                  },
                  "start": {
                    "column": 33,
                    "line": 6
                  }
                },
                "range": [
                  110,
                  116
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    112,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 35,
                      "line": 6
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 40,
                  "line": 6
                },
                "start": {
                  "column": 31,
                  "line": 6
                }
              }
            },
            "range": [
              81,
              117
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 28,
            "line": 5
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
          62,
          74
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        47,
        119
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "type": "ClassDeclaration",
            "abstract": true,
            "body": {
              "type": "ClassBody",
              "range": [
                423,
                505
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
                      433,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
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
                      444,
                      455
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        453,
                        455
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 13
                        },
                        "start": {
                          "column": 28,
                          "line": 13
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 13
                        },
                        "start": {
                          "column": 21,
                          "line": 13
                        }
                      },
                      "range": [
                        446,
                        452
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          448,
                          452
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 13
                          },
                          "start": {
                            "column": 23,
                            "line": 13
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    433,
                    455
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
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
                    "name": "staticMixinMethod",
                    "optional": false,
                    "range": [
                      471,
                      488
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 14
                      },
                      "start": {
                        "column": 15,
                        "line": 14
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      488,
                      499
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        497,
                        499
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 14
                        },
                        "start": {
                          "column": 41,
                          "line": 14
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 14
                        },
                        "start": {
                          "column": 34,
                          "line": 14
                        }
                      },
                      "range": [
                        490,
                        496
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          492,
                          496
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 14
                          },
                          "start": {
                            "column": 36,
                            "line": 14
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 14
                      },
                      "start": {
                        "column": 32,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    464,
                    499
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 66,
                  "line": 12
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
                376,
                386
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 12
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mixin1",
                  "optional": false,
                  "range": [
                    416,
                    422
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 12
                    },
                    "start": {
                      "column": 59,
                      "line": 12
                    }
                  }
                },
                "range": [
                  416,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 12
                  },
                  "start": {
                    "column": 59,
                    "line": 12
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
                395,
                404
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 12
                },
                "start": {
                  "column": 38,
                  "line": 12
                }
              }
            },
            "range": [
              361,
              505
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 12
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
                517,
                527
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              510,
              528
            ],
            "loc": {
              "end": {
                "column": 22,
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
          207,
          530
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 86,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin2",
        "optional": false,
        "range": [
          130,
          136
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
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
                "column": 84,
                "line": 9
              },
              "start": {
                "column": 77,
                "line": 9
              }
            },
            "range": [
              198,
              205
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "range": [
                  200,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 9
                  },
                  "start": {
                    "column": 79,
                    "line": 9
                  }
                }
              },
              "range": [
                200,
                205
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 9
                },
                "start": {
                  "column": 79,
                  "line": 9
                }
              }
            }
          },
          "range": [
            189,
            205
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 9
            },
            "start": {
              "column": 68,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 67,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 9
          }
        },
        "range": [
          136,
          188
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
                      168,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 9
                      },
                      "start": {
                        "column": 47,
                        "line": 9
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 9
                      },
                      "start": {
                        "column": 51,
                        "line": 9
                      }
                    },
                    "range": [
                      172,
                      179
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          174,
                          177
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 9
                          },
                          "start": {
                            "column": 53,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        174,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 9
                        },
                        "start": {
                          "column": 53,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    165,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 9
                    },
                    "start": {
                      "column": 44,
                      "line": 9
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 9
                  },
                  "start": {
                    "column": 60,
                    "line": 9
                  }
                },
                "range": [
                  181,
                  187
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    184,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 9
                    },
                    "start": {
                      "column": 63,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                151,
                187
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TBase",
              "optional": false,
              "range": [
                137,
                142
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              137,
              187
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 9
              },
              "start": {
                "column": 16,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        121,
        530
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          588,
          619
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
                594,
                612
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 4,
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
                612,
                617
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  615,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 25,
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
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 20
                }
              }
            },
            "range": [
              594,
              617
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
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
            "line": 21
          },
          "start": {
            "column": 56,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedFromAbstract2",
        "optional": false,
        "range": [
          538,
          558
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
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
              574,
              586
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 19
              },
              "start": {
                "column": 42,
                "line": 19
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin2",
          "optional": false,
          "range": [
            567,
            573
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 19
            },
            "start": {
              "column": 35,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          567,
          587
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 19
          },
          "start": {
            "column": 35,
            "line": 19
          }
        }
      },
      "range": [
        532,
        619
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
