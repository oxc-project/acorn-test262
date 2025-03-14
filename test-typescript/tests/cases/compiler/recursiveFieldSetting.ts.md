__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    11,
    345
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          28,
          157
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                34,
                45
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                45,
                86
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  84,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 4
                  },
                  "start": {
                    "column": 54,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parent",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 4
                        },
                        "start": {
                          "column": 40,
                          "line": 4
                        }
                      },
                      "range": [
                        70,
                        82
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Recursive1",
                          "optional": false,
                          "range": [
                            72,
                            82
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 4
                            },
                            "start": {
                              "column": 42,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          72,
                          82
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 4
                          },
                          "start": {
                            "column": 42,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      63,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 4
                      },
                      "start": {
                        "column": 33,
                        "line": 4
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    46,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              34,
              86
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "depth",
              "optional": false,
              "range": [
                99,
                104
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
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
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              },
              "range": [
                104,
                112
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  106,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
                    "line": 5
                  }
                }
              }
            },
            "value": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  153,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 5
                  },
                  "start": {
                    "column": 66,
                    "line": 5
                  }
                }
              },
              "consequent": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        129,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 5
                        },
                        "start": {
                          "column": 42,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "range": [
                        134,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 5
                        },
                        "start": {
                          "column": 47,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      129,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 5
                      },
                      "start": {
                        "column": 42,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "depth",
                    "optional": false,
                    "range": [
                      141,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 5
                      },
                      "start": {
                        "column": 54,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    129,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 5
                    },
                    "start": {
                      "column": 42,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    149,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 5
                    },
                    "start": {
                      "column": 62,
                      "line": 5
                    }
                  }
                },
                "range": [
                  129,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 5
                  },
                  "start": {
                    "column": 42,
                    "line": 5
                  }
                }
              },
              "test": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    115,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 28,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "range": [
                    120,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 5
                    },
                    "start": {
                      "column": 33,
                      "line": 5
                    }
                  }
                },
                "range": [
                  115,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 5
                  },
                  "start": {
                    "column": 28,
                    "line": 5
                  }
                }
              },
              "range": [
                115,
                154
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 5
                },
                "start": {
                  "column": 28,
                  "line": 5
                }
              }
            },
            "range": [
              91,
              155
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive1",
        "optional": false,
        "range": [
          17,
          27
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        11,
        157
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          176,
          243
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parent",
              "optional": false,
              "range": [
                182,
                188
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                  "column": 23,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              },
              "range": [
                189,
                201
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recursive2",
                  "optional": false,
                  "range": [
                    191,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "range": [
                  191,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 9
                  }
                }
              }
            },
            "value": null,
            "range": [
              182,
              202
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "depth",
              "optional": false,
              "range": [
                207,
                212
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              },
              "range": [
                212,
                220
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  214,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              }
            },
            "value": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    223,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 20,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "range": [
                    228,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  }
                },
                "range": [
                  223,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "depth",
                "optional": false,
                "range": [
                  235,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 10
                  },
                  "start": {
                    "column": 32,
                    "line": 10
                  }
                }
              },
              "range": [
                223,
                240
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              }
            },
            "range": [
              207,
              241
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 17,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive2",
        "optional": false,
        "range": [
          165,
          175
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        159,
        243
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          262,
          344
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parent",
              "optional": false,
              "range": [
                268,
                274
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 23,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              },
              "range": [
                275,
                287
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recursive3",
                  "optional": false,
                  "range": [
                    277,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                },
                "range": [
                  277,
                  287
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 14
                  },
                  "start": {
                    "column": 13,
                    "line": 14
                  }
                }
              }
            },
            "value": null,
            "range": [
              268,
              288
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "depth",
              "optional": false,
              "range": [
                293,
                298
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              },
              "range": [
                298,
                306
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  300,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              }
            },
            "value": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    309,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 15
                    },
                    "start": {
                      "column": 20,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "range": [
                    314,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 25,
                      "line": 15
                    }
                  }
                },
                "range": [
                  309,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "alpha",
                "optional": false,
                "range": [
                  321,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 15
                  },
                  "start": {
                    "column": 32,
                    "line": 15
                  }
                }
              },
              "range": [
                309,
                326
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
                }
              }
            },
            "range": [
              293,
              327
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alpha",
              "optional": false,
              "range": [
                332,
                337
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                340,
                341
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 16
                }
              }
            },
            "range": [
              332,
              342
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
            "column": 17,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive3",
        "optional": false,
        "range": [
          251,
          261
        ],
        "loc": {
          "end": {
            "column": 16,
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
        245,
        344
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
