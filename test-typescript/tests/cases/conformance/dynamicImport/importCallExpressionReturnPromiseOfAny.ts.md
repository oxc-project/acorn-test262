__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        17
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            17
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            13,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 17,
          "line": 1
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
      "line": 2
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
    899
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./defaultPath\"",
        "value": "./defaultPath",
        "range": [
          31,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 31,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultModule",
            "optional": false,
            "range": [
              12,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
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
        47
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "getSpecifier",
        "optional": false,
        "range": [
          65,
          77
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 2
          },
          "start": {
            "column": 31,
            "line": 2
          }
        },
        "range": [
          79,
          87
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            81,
            87
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 33,
              "line": 2
            }
          }
        }
      },
      "range": [
        48,
        88
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
        "name": "ValidSomeCondition",
        "optional": false,
        "range": [
          106,
          124
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 3
          },
          "start": {
            "column": 37,
            "line": 3
          }
        },
        "range": [
          126,
          135
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            128,
            135
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 3
            },
            "start": {
              "column": 39,
              "line": 3
            }
          }
        }
      },
      "range": [
        89,
        136
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              },
              "range": [
                159,
                168
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  161,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              149,
              168
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            149,
            168
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        137,
        169
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "directory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              },
              "range": [
                193,
                201
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  195,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              184,
              201
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            184,
            201
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        170,
        202
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "moduleFile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              },
              "range": [
                227,
                235
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  229,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              217,
              235
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            217,
            235
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 6
            },
            "start": {
              "column": 14,
              "line": 6
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        203,
        236
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": null,
        "source": {
          "type": "TemplateLiteral",
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "directory",
              "optional": false,
              "range": [
                248,
                257
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleFile",
              "optional": false,
              "range": [
                262,
                272
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              }
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                245,
                248
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "\\",
                "raw": "\\\\"
              },
              "range": [
                257,
                262
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              },
              "range": [
                272,
                274
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 8
                },
                "start": {
                  "column": 34,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            245,
            274
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 8
            },
            "start": {
              "column": 7,
              "line": 8
            }
          }
        },
        "range": [
          238,
          275
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        238,
        276
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": null,
        "source": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getSpecifier",
            "optional": false,
            "range": [
              284,
              296
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 9
              },
              "start": {
                "column": 7,
                "line": 9
              }
            }
          },
          "optional": false,
          "range": [
            284,
            298
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 9
            },
            "start": {
              "column": 7,
              "line": 9
            }
          }
        },
        "range": [
          277,
          299
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        277,
        300
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 9
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
            "name": "p1",
            "optional": false,
            "range": [
              306,
              308
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "\"externalModule\"",
                "value": "externalModule",
                "range": [
                  349,
                  365
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 11
                  },
                  "start": {
                    "column": 47,
                    "line": 11
                  }
                }
              },
              "consequent": {
                "type": "Literal",
                "raw": "\"./0\"",
                "value": "./0",
                "range": [
                  341,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 11
                  },
                  "start": {
                    "column": 39,
                    "line": 11
                  }
                }
              },
              "test": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ValidSomeCondition",
                  "optional": false,
                  "range": [
                    318,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "range": [
                  318,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 11
                  },
                  "start": {
                    "column": 16,
                    "line": 11
                  }
                }
              },
              "range": [
                318,
                365
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            },
            "range": [
              311,
              366
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            306,
            366
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        302,
        367
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                374,
                388
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    383,
                    388
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        384,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    376,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "range": [
                  376,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              372,
              388
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "range": [
                  398,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 12
                  },
                  "start": {
                    "column": 30,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                398,
                412
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 12
                },
                "start": {
                  "column": 30,
                  "line": 12
                }
              }
            },
            "range": [
              391,
              413
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 12
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          },
          "range": [
            372,
            413
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        368,
        414
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "name": "p11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 13
                },
                "start": {
                  "column": 7,
                  "line": 13
                }
              },
              "range": [
                422,
                453
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    431,
                    453
                  ],
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultModule",
                        "optional": false,
                        "range": [
                          439,
                          452
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 13
                          },
                          "start": {
                            "column": 24,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        432,
                        452
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 13
                        },
                        "start": {
                          "column": 17,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 13
                    },
                    "start": {
                      "column": 16,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    424,
                    431
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "range": [
                  424,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              419,
              453
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "range": [
                  463,
                  475
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 13
                  },
                  "start": {
                    "column": 48,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                463,
                477
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 13
                },
                "start": {
                  "column": 48,
                  "line": 13
                }
              }
            },
            "range": [
              456,
              478
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 13
              },
              "start": {
                "column": 41,
                "line": 13
              }
            }
          },
          "range": [
            419,
            478
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        415,
        479
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "p2",
            "optional": false,
            "range": [
              486,
              488
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Literal",
                  "raw": "\"defaulPath\"",
                  "value": "defaulPath",
                  "range": [
                    528,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 14
                    },
                    "start": {
                      "column": 48,
                      "line": 14
                    }
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getSpecifier",
                    "optional": false,
                    "range": [
                      511,
                      523
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 14
                      },
                      "start": {
                        "column": 31,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    511,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 14
                    },
                    "start": {
                      "column": 31,
                      "line": 14
                    }
                  }
                },
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "whatToLoad",
                  "optional": false,
                  "range": [
                    498,
                    508
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 14
                    },
                    "start": {
                      "column": 18,
                      "line": 14
                    }
                  }
                },
                "range": [
                  498,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                }
              },
              "range": [
                491,
                541
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  552,
                  574
                ],
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defaultModule",
                      "optional": false,
                      "range": [
                        560,
                        573
                      ],
                      "loc": {
                        "end": {
                          "column": 93,
                          "line": 14
                        },
                        "start": {
                          "column": 80,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      553,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 14
                      },
                      "start": {
                        "column": 73,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 94,
                    "line": 14
                  },
                  "start": {
                    "column": 72,
                    "line": 14
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  545,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 14
                  },
                  "start": {
                    "column": 65,
                    "line": 14
                  }
                }
              },
              "range": [
                545,
                574
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 14
                },
                "start": {
                  "column": 65,
                  "line": 14
                }
              }
            },
            "range": [
              491,
              574
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 14
              },
              "start": {
                "column": 11,
                "line": 14
              }
            }
          },
          "range": [
            486,
            574
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 14
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
        480,
        575
      ],
      "loc": {
        "end": {
          "column": 95,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zero",
                        "optional": false,
                        "range": [
                          605,
                          609
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 16
                          },
                          "start": {
                            "column": 11,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          610,
                          613
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 16
                          },
                          "start": {
                            "column": 16,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        605,
                        613
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      605,
                      615
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
                    598,
                    616
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
                592,
                638
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 15
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
                "name": "zero",
                "optional": false,
                "range": [
                  584,
                  588
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              584,
              638
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 15
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
            "name": "p1",
            "optional": false,
            "range": [
              576,
              578
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 15
              },
              "start": {
                "column": 0,
                "line": 15
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "range": [
              579,
              583
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 15
              },
              "start": {
                "column": 3,
                "line": 15
              }
            }
          },
          "range": [
            576,
            583
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          576,
          639
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        576,
        640
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 17
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
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 19
                },
                "start": {
                  "column": 5,
                  "line": 19
                }
              },
              "range": [
                647,
                655
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  649,
                  655
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 19
                  },
                  "start": {
                    "column": 7,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              646,
              655
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            646,
            655
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        642,
        656
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 20
                },
                "start": {
                  "column": 6,
                  "line": 20
                }
              },
              "range": [
                663,
                694
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    672,
                    694
                  ],
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defaultModule",
                        "optional": false,
                        "range": [
                          680,
                          693
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 20
                          },
                          "start": {
                            "column": 23,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        673,
                        693
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 20
                        },
                        "start": {
                          "column": 16,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    665,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "range": [
                  665,
                  694
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              661,
              694
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "range": [
                  704,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 20
                  },
                  "start": {
                    "column": 47,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false,
                  "range": [
                    706,
                    718
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 20
                    },
                    "start": {
                      "column": 49,
                      "line": 20
                    }
                  }
                },
                "optional": false,
                "range": [
                  706,
                  720
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 20
                  },
                  "start": {
                    "column": 49,
                    "line": 20
                  }
                }
              },
              "range": [
                704,
                720
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 20
                },
                "start": {
                  "column": 47,
                  "line": 20
                }
              }
            },
            "range": [
              697,
              721
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 20
              },
              "start": {
                "column": 40,
                "line": 20
              }
            }
          },
          "range": [
            661,
            721
          ],
          "loc": {
            "end": {
              "column": 64,
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
        657,
        722
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "type": "ForOfStatement",
            "await": false,
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
                        "name": "path",
                        "optional": false,
                        "range": [
                          828,
                          832
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 24
                          },
                          "start": {
                            "column": 14,
                            "line": 24
                          }
                        }
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "directory",
                            "optional": false,
                            "range": [
                              838,
                              847
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
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "range": [
                              835,
                              838
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 24
                              },
                              "start": {
                                "column": 21,
                                "line": 24
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "\\moduleFile",
                              "raw": "\\\\moduleFile"
                            },
                            "range": [
                              847,
                              861
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 24
                              },
                              "start": {
                                "column": 33,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "range": [
                          835,
                          861
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 24
                          },
                          "start": {
                            "column": 21,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        828,
                        861
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 24
                        },
                        "start": {
                          "column": 14,
                          "line": 24
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    822,
                    862
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ImportExpression",
                    "options": null,
                    "source": {
                      "type": "YieldExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "range": [
                          884,
                          888
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 25
                          },
                          "start": {
                            "column": 21,
                            "line": 25
                          }
                        }
                      },
                      "delegate": false,
                      "range": [
                        878,
                        888
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      871,
                      889
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    871,
                    890
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                812,
                896
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 41,
                  "line": 23
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "directory",
                    "optional": false,
                    "range": [
                      786,
                      795
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 23
                      },
                      "start": {
                        "column": 15,
                        "line": 23
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    786,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                780,
                795
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "directories",
              "optional": false,
              "range": [
                799,
                810
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 23
                },
                "start": {
                  "column": 28,
                  "line": 23
                }
              }
            },
            "range": [
              775,
              896
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          769,
          898
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 45,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "loadModule",
        "optional": false,
        "range": [
          735,
          745
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 22
          },
          "start": {
            "column": 11,
            "line": 22
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "directories",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 22
              },
              "start": {
                "column": 33,
                "line": 22
              }
            },
            "range": [
              757,
              767
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  759,
                  765
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 22
                  },
                  "start": {
                    "column": 35,
                    "line": 22
                  }
                }
              },
              "range": [
                759,
                767
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 22
                },
                "start": {
                  "column": 35,
                  "line": 22
                }
              }
            }
          },
          "range": [
            746,
            767
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 22
            },
            "start": {
              "column": 22,
              "line": 22
            }
          }
        }
      ],
      "range": [
        724,
        898
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
