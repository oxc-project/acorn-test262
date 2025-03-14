__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    175,
    603
  ],
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              },
              "range": [
                182,
                190
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  184,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 5
                  },
                  "start": {
                    "column": 9,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              179,
              190
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            179,
            190
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        175,
        191
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 5
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              },
              "range": [
                200,
                217
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      202,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 6
                      },
                      "start": {
                        "column": 10,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      211,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  202,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              196,
              217
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            196,
            217
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        192,
        218
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "range": [
                  297,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "range": [
                  303,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              },
              "range": [
                297,
                307
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              297,
              308
            ],
            "loc": {
              "end": {
                "column": 15,
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
          291,
          320
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "range": [
                  255,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "var1",
                  "optional": false,
                  "range": [
                    261,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 10,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "range": [
                    266,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                },
                "range": [
                  261,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              },
              "range": [
                255,
                272
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              255,
              273
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          249,
          285
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 30,
            "line": 7
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "range": [
              230,
              234
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 11,
                "line": 7
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            223,
            234
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"string\"",
          "value": "string",
          "range": [
            239,
            247
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 20,
              "line": 7
            }
          }
        },
        "range": [
          223,
          247
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 7
          },
          "start": {
            "column": 4,
            "line": 7
          }
        }
      },
      "range": [
        219,
        320
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              },
              "range": [
                374,
                391
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      376,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 15
                      },
                      "start": {
                        "column": 14,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      385,
                      391
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 15
                      },
                      "start": {
                        "column": 23,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  376,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 15
                  },
                  "start": {
                    "column": 14,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              366,
              391
            ],
            "loc": {
              "end": {
                "column": 29,
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
            366,
            391
          ],
          "loc": {
            "end": {
              "column": 29,
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
        362,
        392
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        393,
        426
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 16
                  },
                  "start": {
                    "column": 15,
                    "line": 16
                  }
                },
                "range": [
                  408,
                  425
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        410,
                        416
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 16
                        },
                        "start": {
                          "column": 17,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        419,
                        425
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 16
                        },
                        "start": {
                          "column": 26,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    410,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                }
              },
              "range": [
                404,
                425
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "init": null,
            "range": [
              404,
              425
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 16
              },
              "start": {
                "column": 11,
                "line": 16
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          400,
          426
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 33,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "range": [
                  566,
                  574
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "var2",
                "optional": false,
                "range": [
                  577,
                  581
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              },
              "range": [
                566,
                581
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              566,
              582
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          560,
          603
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 21
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "range": [
                  517,
                  525
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "var2",
                "optional": false,
                "range": [
                  528,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 19
                  },
                  "start": {
                    "column": 15,
                    "line": 19
                  }
                }
              },
              "range": [
                517,
                532
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              517,
              533
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          457,
          554
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 30,
            "line": 17
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "range": [
              438,
              442
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 17
              },
              "start": {
                "column": 11,
                "line": 17
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            431,
            442
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"string\"",
          "value": "string",
          "range": [
            447,
            455
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 17
            },
            "start": {
              "column": 20,
              "line": 17
            }
          }
        },
        "range": [
          431,
          455
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 17
          },
          "start": {
            "column": 4,
            "line": 17
          }
        }
      },
      "range": [
        427,
        603
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
