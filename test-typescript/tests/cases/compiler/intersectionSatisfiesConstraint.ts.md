__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    457
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          25,
          55
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonProperty",
              "optional": false,
              "range": [
                31,
                45
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              },
              "range": [
                45,
                53
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  47,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              31,
              53
            ],
            "loc": {
              "end": {
                "column": 26,
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
            "column": 25,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FirstInterface",
        "optional": false,
        "range": [
          10,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
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
        55
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          83,
          113
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonProperty",
              "optional": false,
              "range": [
                89,
                103
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              },
              "range": [
                103,
                111
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  105,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              89,
              111
            ],
            "loc": {
              "end": {
                "column": 26,
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
            "column": 26,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SecondInterface",
        "optional": false,
        "range": [
          67,
          82
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        57,
        113
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myFirstFunction",
            "optional": false,
            "range": [
              121,
              136
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
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
                        "name": "newParam",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 10
                            },
                            "start": {
                              "column": 18,
                              "line": 10
                            }
                          },
                          "range": [
                            218,
                            249
                          ],
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    220,
                                    221
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  220,
                                  221
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 10
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
                                      "name": "otherProperty",
                                      "optional": false,
                                      "range": [
                                        226,
                                        239
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 10
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
                                          "column": 47,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 39,
                                          "line": 10
                                        }
                                      },
                                      "range": [
                                        239,
                                        247
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          241,
                                          247
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 41,
                                            "line": 10
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      226,
                                      247
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 10
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  224,
                                  249
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "range": [
                              220,
                              249
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 10
                              },
                              "start": {
                                "column": 20,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          210,
                          249
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 10
                          },
                          "start": {
                            "column": 10,
                            "line": 10
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "range": [
                              266,
                              272
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 10
                              },
                              "start": {
                                "column": 66,
                                "line": 10
                              }
                            }
                          },
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "otherProperty",
                                  "optional": false,
                                  "range": [
                                    276,
                                    289
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 89,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 76,
                                      "line": 10
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "raw": "3",
                                  "value": 3,
                                  "range": [
                                    291,
                                    292
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 92,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 91,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  276,
                                  292
                                ],
                                "loc": {
                                  "end": {
                                    "column": 92,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 76,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "range": [
                              274,
                              294
                            ],
                            "loc": {
                              "end": {
                                "column": 94,
                                "line": 10
                              },
                              "start": {
                                "column": 74,
                                "line": 10
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
                            "name": "Object",
                            "optional": false,
                            "range": [
                              252,
                              258
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 10
                              },
                              "start": {
                                "column": 52,
                                "line": 10
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "assign",
                            "optional": false,
                            "range": [
                              259,
                              265
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 10
                              },
                              "start": {
                                "column": 59,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            252,
                            265
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 10
                            },
                            "start": {
                              "column": 52,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          252,
                          295
                        ],
                        "loc": {
                          "end": {
                            "column": 95,
                            "line": 10
                          },
                          "start": {
                            "column": 52,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        210,
                        295
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 10
                        },
                        "start": {
                          "column": 10,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    204,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
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
                        "name": "newParam",
                        "optional": false,
                        "range": [
                          317,
                          325
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 11
                          },
                          "start": {
                            "column": 21,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mySecondFunction",
                      "optional": false,
                      "range": [
                        300,
                        316
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 4,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      300,
                      326
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    300,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
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
                198,
                328
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 12
                },
                "start": {
                  "column": 83,
                  "line": 9
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
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 9
                    },
                    "start": {
                      "column": 75,
                      "line": 9
                    }
                  },
                  "range": [
                    190,
                    193
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        192,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 9
                        },
                        "start": {
                          "column": 77,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      192,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 9
                      },
                      "start": {
                        "column": 77,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  184,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 9
                  },
                  "start": {
                    "column": 69,
                    "line": 9
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              },
              "range": [
                139,
                183
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FirstInterface",
                          "optional": false,
                          "range": [
                            150,
                            164
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 9
                            },
                            "start": {
                              "column": 35,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          150,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 9
                          },
                          "start": {
                            "column": 35,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SecondInterface",
                          "optional": false,
                          "range": [
                            167,
                            182
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 9
                            },
                            "start": {
                              "column": 52,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          167,
                          182
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 9
                          },
                          "start": {
                            "column": 52,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      150,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 9
                      },
                      "start": {
                        "column": 35,
                        "line": 9
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      140,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 25,
                        "line": 9
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    140,
                    182
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 9
                    },
                    "start": {
                      "column": 25,
                      "line": 9
                    }
                  }
                }
              ]
            },
            "range": [
              139,
              328
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 24,
                "line": 9
              }
            }
          },
          "range": [
            121,
            328
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        115,
        328
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
            "name": "mySecondFunction",
            "optional": false,
            "range": [
              336,
              352
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "newParam",
                    "optional": false,
                    "range": [
                      446,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 11,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    439,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                433,
                456
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 16
                },
                "start": {
                  "column": 103,
                  "line": 14
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
                "name": "newParam",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 14
                    },
                    "start": {
                      "column": 95,
                      "line": 14
                    }
                  },
                  "range": [
                    425,
                    428
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        427,
                        428
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 14
                        },
                        "start": {
                          "column": 97,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      427,
                      428
                    ],
                    "loc": {
                      "end": {
                        "column": 98,
                        "line": 14
                      },
                      "start": {
                        "column": 97,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  417,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 14
                  },
                  "start": {
                    "column": 87,
                    "line": 14
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 86,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 14
                }
              },
              "range": [
                355,
                416
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "commonProperty",
                          "optional": false,
                          "range": [
                            368,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 14
                            },
                            "start": {
                              "column": 38,
                              "line": 14
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
                              "column": 60,
                              "line": 14
                            },
                            "start": {
                              "column": 52,
                              "line": 14
                            }
                          },
                          "range": [
                            382,
                            390
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              384,
                              390
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 14
                              },
                              "start": {
                                "column": 54,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          368,
                          391
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 14
                          },
                          "start": {
                            "column": 38,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "otherProperty",
                          "optional": false,
                          "range": [
                            392,
                            405
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 14
                            },
                            "start": {
                              "column": 62,
                              "line": 14
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
                              "column": 83,
                              "line": 14
                            },
                            "start": {
                              "column": 75,
                              "line": 14
                            }
                          },
                          "range": [
                            405,
                            413
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              407,
                              413
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
                          392,
                          413
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 14
                          },
                          "start": {
                            "column": 62,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      366,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 14
                      },
                      "start": {
                        "column": 36,
                        "line": 14
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      356,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 26,
                        "line": 14
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    356,
                    415
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 14
                    },
                    "start": {
                      "column": 26,
                      "line": 14
                    }
                  }
                }
              ]
            },
            "range": [
              355,
              456
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 25,
                "line": 14
              }
            }
          },
          "range": [
            336,
            456
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        330,
        456
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
