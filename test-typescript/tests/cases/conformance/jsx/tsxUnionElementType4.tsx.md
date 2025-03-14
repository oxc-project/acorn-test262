__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    25,
    636
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          32,
          37
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'react'",
          "value": "react",
          "range": [
            48,
            55
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        },
        "range": [
          40,
          56
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        25,
        57
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 3
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
          111,
          156
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                117,
                123
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                123,
                154
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        143,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      136,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  126,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 6
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
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "range": [
              117,
              154
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
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
            "line": 9
          },
          "start": {
            "column": 52,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC1",
        "optional": false,
        "range": [
          65,
          68
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            77,
            82
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 5
            },
            "start": {
              "column": 18,
              "line": 5
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            83,
            92
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        },
        "range": [
          77,
          92
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 5
          },
          "start": {
            "column": 18,
            "line": 5
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          92,
          110
        ],
        "params": [
          {
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
                    94,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 5
                    },
                    "start": {
                      "column": 35,
                      "line": 5
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
                      "column": 45,
                      "line": 5
                    },
                    "start": {
                      "column": 37,
                      "line": 5
                    }
                  },
                  "range": [
                    96,
                    104
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      98,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 39,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  94,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 35,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              93,
              105
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              107,
              109
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 48,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 5
          },
          "start": {
            "column": 33,
            "line": 5
          }
        }
      },
      "range": [
        59,
        156
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
          211,
          281
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                217,
                223
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                223,
                254
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        243,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      236,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  226,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 13,
                    "line": 12
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
                  "line": 14
                },
                "start": {
                  "column": 10,
                  "line": 12
                }
              }
            },
            "range": [
              217,
              254
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                267,
                273
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
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
                273,
                279
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  276,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 15
                  },
                  "start": {
                    "column": 21,
                    "line": 15
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
                  "column": 24,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
                }
              }
            },
            "range": [
              259,
              279
            ],
            "loc": {
              "end": {
                "column": 24,
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
            "column": 53,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC2",
        "optional": false,
        "range": [
          164,
          167
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            176,
            181
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 11
            },
            "start": {
              "column": 18,
              "line": 11
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            182,
            191
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 11
            },
            "start": {
              "column": 24,
              "line": 11
            }
          }
        },
        "range": [
          176,
          191
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 11
          },
          "start": {
            "column": 18,
            "line": 11
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          191,
          210
        ],
        "params": [
          {
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
                    194,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 11
                    },
                    "start": {
                      "column": 36,
                      "line": 11
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
                      "column": 45,
                      "line": 11
                    },
                    "start": {
                      "column": 37,
                      "line": 11
                    }
                  },
                  "range": [
                    195,
                    203
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      197,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 11
                      },
                      "start": {
                        "column": 39,
                        "line": 11
                      }
                    }
                  }
                },
                "range": [
                  194,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 11
                  },
                  "start": {
                    "column": 36,
                    "line": 11
                  }
                }
              }
            ],
            "range": [
              192,
              205
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 11
              },
              "start": {
                "column": 34,
                "line": 11
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              207,
              209
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 11
              },
              "start": {
                "column": 49,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 11
          },
          "start": {
            "column": 33,
            "line": 11
          }
        }
      },
      "range": [
        158,
        281
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          325,
          370
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                331,
                337
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                337,
                368
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        357,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 20
                        },
                        "start": {
                          "column": 15,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      350,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  340,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 13,
                    "line": 19
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
                  "line": 21
                },
                "start": {
                  "column": 10,
                  "line": 19
                }
              }
            },
            "range": [
              331,
              368
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 42,
            "line": 18
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC3",
        "optional": false,
        "range": [
          289,
          292
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 18
          },
          "start": {
            "column": 6,
            "line": 18
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            301,
            306
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
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            307,
            316
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 18
            },
            "start": {
              "column": 24,
              "line": 18
            }
          }
        },
        "range": [
          301,
          316
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 18
          },
          "start": {
            "column": 18,
            "line": 18
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          316,
          324
        ],
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              317,
              319
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 18
              },
              "start": {
                "column": 34,
                "line": 18
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              321,
              323
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 18
              },
              "start": {
                "column": 38,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 18
          },
          "start": {
            "column": 33,
            "line": 18
          }
        }
      },
      "range": [
        283,
        370
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
          414,
          459
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                420,
                426
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
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
                426,
                457
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        446,
                        450
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 26
                        },
                        "start": {
                          "column": 15,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      439,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  429,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 13,
                    "line": 25
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
                  "line": 27
                },
                "start": {
                  "column": 10,
                  "line": 25
                }
              }
            },
            "range": [
              420,
              457
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 42,
            "line": 24
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC4",
        "optional": false,
        "range": [
          378,
          381
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 24
          },
          "start": {
            "column": 6,
            "line": 24
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            390,
            395
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 24
            },
            "start": {
              "column": 18,
              "line": 24
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            396,
            405
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 24
            },
            "start": {
              "column": 24,
              "line": 24
            }
          }
        },
        "range": [
          390,
          405
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 24
          },
          "start": {
            "column": 18,
            "line": 24
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          405,
          413
        ],
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              406,
              408
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 24
              },
              "start": {
                "column": 34,
                "line": 24
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              410,
              412
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 24
              },
              "start": {
                "column": 38,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 24
          },
          "start": {
            "column": 33,
            "line": 24
          }
        }
      },
      "range": [
        372,
        459
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
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
            "name": "RCComp",
            "optional": false,
            "range": [
              465,
              471
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "range": [
                474,
                477
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 30
                },
                "start": {
                  "column": 13,
                  "line": 30
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC2",
              "optional": false,
              "range": [
                481,
                484
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 30
                }
              }
            },
            "range": [
              474,
              484
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 30
              },
              "start": {
                "column": 13,
                "line": 30
              }
            }
          },
          "range": [
            465,
            484
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        461,
        485
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "EmptyRCComp",
            "optional": false,
            "range": [
              490,
              501
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC3",
              "optional": false,
              "range": [
                504,
                507
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 31
                },
                "start": {
                  "column": 18,
                  "line": 31
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "range": [
                511,
                514
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 31
                },
                "start": {
                  "column": 25,
                  "line": 31
                }
              }
            },
            "range": [
              504,
              514
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 31
              },
              "start": {
                "column": 18,
                "line": 31
              }
            }
          },
          "range": [
            490,
            514
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        486,
        515
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "PartRCComp",
            "optional": false,
            "range": [
              520,
              530
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC1",
              "optional": false,
              "range": [
                533,
                536
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 32
                },
                "start": {
                  "column": 17,
                  "line": 32
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "RC4",
              "optional": false,
              "range": [
                540,
                543
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 32
                },
                "start": {
                  "column": 24,
                  "line": 32
                }
              }
            },
            "range": [
              533,
              543
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 32
              },
              "start": {
                "column": 17,
                "line": 32
              }
            }
          },
          "range": [
            520,
            543
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        516,
        544
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "a",
            "optional": false,
            "range": [
              558,
              559
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                562,
                574
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      570,
                      571
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 34
                      },
                      "start": {
                        "column": 16,
                        "line": 34
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    570,
                    571
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 34
                    },
                    "start": {
                      "column": 16,
                      "line": 34
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "RCComp",
                "range": [
                  563,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 34
                  },
                  "start": {
                    "column": 9,
                    "line": 34
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 20,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "range": [
              562,
              574
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 34
              },
              "start": {
                "column": 8,
                "line": 34
              }
            }
          },
          "range": [
            558,
            574
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        554,
        575
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
              580,
              581
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                584,
                605
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      596,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 35
                      },
                      "start": {
                        "column": 20,
                        "line": 35
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        599,
                        601
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 35
                        },
                        "start": {
                          "column": 23,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      598,
                      602
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 35
                      },
                      "start": {
                        "column": 22,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    596,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 35
                    },
                    "start": {
                      "column": 20,
                      "line": 35
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "PartRCComp",
                "range": [
                  585,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 35
                  },
                  "start": {
                    "column": 9,
                    "line": 35
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 29,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              }
            },
            "range": [
              584,
              605
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 35
              },
              "start": {
                "column": 8,
                "line": 35
              }
            }
          },
          "range": [
            580,
            605
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        576,
        605
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "c",
            "optional": false,
            "range": [
              610,
              611
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                614,
                634
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "range": [
                      627,
                      631
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 36
                      },
                      "start": {
                        "column": 21,
                        "line": 36
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    627,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 36
                    },
                    "start": {
                      "column": 21,
                      "line": 36
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyRCComp",
                "range": [
                  615,
                  626
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 36
                  },
                  "start": {
                    "column": 9,
                    "line": 36
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 28,
                  "line": 36
                },
                "start": {
                  "column": 8,
                  "line": 36
                }
              }
            },
            "range": [
              614,
              634
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 36
              },
              "start": {
                "column": 8,
                "line": 36
              }
            }
          },
          "range": [
            610,
            634
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        606,
        635
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 37
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
