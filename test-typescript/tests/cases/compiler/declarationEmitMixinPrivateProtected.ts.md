__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    357
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mix",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            },
            "range": [
              32,
              38
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TMix",
                "optional": false,
                "range": [
                  34,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
                    "line": 1
                  }
                }
              },
              "range": [
                34,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            }
          },
          "range": [
            27,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 39,
            "line": 1
          }
        },
        "range": [
          39,
          45
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TMix",
            "optional": false,
            "range": [
              41,
              45
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
              }
            }
          },
          "range": [
            41,
            45
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 41,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          26
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMix",
              "optional": false,
              "range": [
                21,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              21,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        46
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 1
        },
        "start": {
          "column": 0,
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
            "name": "DisposableMixin",
            "optional": false,
            "range": [
              54,
              69
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ClassExpression",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                78,
                189
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "accessibility": "protected",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_onDispose",
                    "optional": false,
                    "range": [
                      94,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
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
                      104,
                      147
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  117,
                                  121
                                ],
                                "loc": {
                                  "end": {
                                    "column": 12,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 5
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_assertIsStripped",
                                "optional": false,
                                "range": [
                                  122,
                                  139
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                117,
                                139
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 5
                                },
                                "start": {
                                  "column": 8,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              117,
                              141
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 5
                              },
                              "start": {
                                "column": 8,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            117,
                            141
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        107,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 6
                        },
                        "start": {
                          "column": 27,
                          "line": 4
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
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    84,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 4
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
                    "name": "_assertIsStripped",
                    "optional": false,
                    "range": [
                      160,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
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
                      177,
                      187
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        180,
                        187
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 8
                        },
                        "start": {
                          "column": 32,
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
                        "column": 5,
                        "line": 8
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    152,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 7
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
                  "column": 30,
                  "line": 3
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "range": [
              72,
              189
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          },
          "range": [
            54,
            189
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        48,
        190
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false,
            "range": [
              250,
              265
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 12
              },
              "start": {
                "column": 19,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "mix",
          "optional": false,
          "range": [
            246,
            249
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 12
            },
            "start": {
              "column": 15,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          246,
          266
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 12
          },
          "start": {
            "column": 15,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "range": [
        231,
        267
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        268,
        356
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            318,
            356
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "accessibility": "protected",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_onDispose",
                "optional": false,
                "range": [
                  334,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 14
                  },
                  "start": {
                    "column": 14,
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
                  344,
                  354
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    347,
                    354
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 27,
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
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 24,
                    "line": 14
                  }
                }
              },
              "range": [
                324,
                354
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
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
              "line": 16
            },
            "start": {
              "column": 50,
              "line": 13
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Monitor",
          "optional": false,
          "range": [
            281,
            288
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 13
            },
            "start": {
              "column": 13,
              "line": 13
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
              "name": "DisposableMixin",
              "optional": false,
              "range": [
                301,
                316
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 13
                },
                "start": {
                  "column": 33,
                  "line": 13
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "mix",
            "optional": false,
            "range": [
              297,
              300
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 13
              },
              "start": {
                "column": 29,
                "line": 13
              }
            }
          },
          "optional": false,
          "range": [
            297,
            317
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 13
            },
            "start": {
              "column": 29,
              "line": 13
            }
          }
        },
        "range": [
          275,
          356
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "module",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    280
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mix",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            },
            "range": [
              32,
              38
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TMix",
                "optional": false,
                "range": [
                  34,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
                    "line": 1
                  }
                }
              },
              "range": [
                34,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            }
          },
          "range": [
            27,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 39,
            "line": 1
          }
        },
        "range": [
          39,
          45
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TMix",
            "optional": false,
            "range": [
              41,
              45
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
              }
            }
          },
          "range": [
            41,
            45
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 1
            },
            "start": {
              "column": 41,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          26
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMix",
              "optional": false,
              "range": [
                21,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              21,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        46
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 1
        },
        "start": {
          "column": 0,
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
            "name": "DisposableMixin",
            "optional": false,
            "range": [
              54,
              69
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ClassExpression",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                78,
                189
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "accessibility": "protected",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_onDispose",
                    "optional": false,
                    "range": [
                      94,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
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
                      104,
                      147
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  117,
                                  121
                                ],
                                "loc": {
                                  "end": {
                                    "column": 12,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 5
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_assertIsStripped",
                                "optional": false,
                                "range": [
                                  122,
                                  139
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                117,
                                139
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 5
                                },
                                "start": {
                                  "column": 8,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              117,
                              141
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 5
                              },
                              "start": {
                                "column": 8,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            117,
                            141
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        107,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 6
                        },
                        "start": {
                          "column": 27,
                          "line": 4
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
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    84,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 4
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
                    "name": "_assertIsStripped",
                    "optional": false,
                    "range": [
                      160,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 12,
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
                      177,
                      187
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        180,
                        187
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 8
                        },
                        "start": {
                          "column": 32,
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
                        "column": 5,
                        "line": 8
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    152,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 7
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
                  "column": 30,
                  "line": 3
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "range": [
              72,
              189
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          },
          "range": [
            54,
            189
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        48,
        190
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        192,
        280
      ],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            242,
            280
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "accessibility": "protected",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_onDispose",
                "optional": false,
                "range": [
                  258,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
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
                  268,
                  278
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    271,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 27,
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
                    "line": 13
                  },
                  "start": {
                    "column": 24,
                    "line": 12
                  }
                }
              },
              "range": [
                248,
                278
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 50,
              "line": 11
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "DisposableMixin",
              "optional": false,
              "range": [
                225,
                240
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 11
                },
                "start": {
                  "column": 33,
                  "line": 11
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "mix",
            "optional": false,
            "range": [
              221,
              224
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 29,
                "line": 11
              }
            }
          },
          "optional": false,
          "range": [
            221,
            241
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 11
            },
            "start": {
              "column": 29,
              "line": 11
            }
          }
        },
        "range": [
          207,
          280
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 15,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
