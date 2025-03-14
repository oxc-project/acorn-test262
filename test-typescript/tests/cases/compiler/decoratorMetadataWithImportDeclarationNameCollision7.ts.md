__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    61
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        0,
        60
      ],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            24,
            60
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething",
                "optional": false,
                "range": [
                  37,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
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
                  48,
                  58
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    51,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 2
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
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                30,
                58
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
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
              "line": 4
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "db",
          "optional": false,
          "range": [
            21,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          15,
          60
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
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
    249
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./db'",
        "value": "./db",
        "range": [
          15,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            9
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "range": [
              7,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
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
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "range": [
                67,
                73
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              60,
              74
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          54,
          76
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 31,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someDecorator",
        "optional": false,
        "range": [
          32,
          45
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "range": [
            46,
            52
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        }
      ],
      "range": [
        23,
        76
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          106,
          230
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "db",
              "optional": false,
              "range": [
                112,
                114
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              },
              "range": [
                114,
                121
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "range": [
                      116,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "range": [
                      119,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    116,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "range": [
                  116,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              112,
              122
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                136,
                147
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                147,
                228
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            178,
                            182
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "range": [
                            183,
                            185
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 10
                            },
                            "start": {
                              "column": 13,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          178,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "range": [
                          188,
                          190
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 10
                          },
                          "start": {
                            "column": 18,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        178,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      178,
                      191
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              200,
                              204
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 11
                              },
                              "start": {
                                "column": 8,
                                "line": 11
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "db",
                            "optional": false,
                            "range": [
                              205,
                              207
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 11
                              },
                              "start": {
                                "column": 13,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            200,
                            207
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "doSomething",
                          "optional": false,
                          "range": [
                            208,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 11
                            },
                            "start": {
                              "column": 16,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          200,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 11
                          },
                          "start": {
                            "column": 8,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        200,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      200,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  159,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 9
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
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 9
                      },
                      "start": {
                        "column": 18,
                        "line": 9
                      }
                    },
                    "range": [
                      150,
                      157
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "range": [
                            152,
                            154
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 9
                            },
                            "start": {
                              "column": 20,
                              "line": 9
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "range": [
                            155,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 9
                            },
                            "start": {
                              "column": 23,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          152,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 9
                          },
                          "start": {
                            "column": 20,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        152,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 9
                        },
                        "start": {
                          "column": 20,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    148,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            },
            "range": [
              136,
              228
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "someDecorator",
            "optional": false,
            "range": [
              78,
              91
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 5
              }
            }
          },
          "range": [
            77,
            91
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "range": [
          98,
          105
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        77,
        230
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "range": [
              239,
              246
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "range": [
              239,
              246
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "range": [
            239,
            246
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 14
            },
            "start": {
              "column": 8,
              "line": 14
            }
          }
        }
      ],
      "range": [
        231,
        248
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
