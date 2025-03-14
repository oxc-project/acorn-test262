__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    315
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        79
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            27,
            79
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test1",
                "optional": false,
                "range": [
                  33,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "initializer": {
                "type": "Literal",
                "raw": "'123123'",
                "value": "123123",
                "range": [
                  41,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              },
              "range": [
                33,
                49
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test2",
                "optional": false,
                "range": [
                  55,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "initializer": {
                "type": "Literal",
                "raw": "'12312312312'",
                "value": "12312312312",
                "range": [
                  63,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              },
              "range": [
                55,
                76
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
              "column": 27,
              "line": 1
            }
          }
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestEnum",
          "optional": false,
          "range": [
            18,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        "range": [
          7,
          79
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
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
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        81,
        167
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            104,
            167
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "range": [
                    111,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "range": [
                    120,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 7
                    },
                    "start": {
                      "column": 14,
                      "line": 7
                    }
                  }
                },
                "range": [
                  111,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 7
                  },
                  "start": {
                    "column": 5,
                    "line": 7
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
                    "column": 28,
                    "line": 7
                  },
                  "start": {
                    "column": 20,
                    "line": 7
                  }
                },
                "range": [
                  126,
                  134
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    128,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 7
                    },
                    "start": {
                      "column": 22,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                110,
                135
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestEnum",
                  "optional": false,
                  "range": [
                    141,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 8
                    },
                    "start": {
                      "column": 5,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test2",
                  "optional": false,
                  "range": [
                    150,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
                    }
                  }
                },
                "range": [
                  141,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 5,
                    "line": 8
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
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                },
                "range": [
                  156,
                  164
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    158,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 8
                    },
                    "start": {
                      "column": 22,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                140,
                165
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
              "column": 23,
              "line": 6
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ITest",
          "optional": false,
          "range": [
            98,
            103
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 6
            },
            "start": {
              "column": 17,
              "line": 6
            }
          }
        },
        "range": [
          88,
          167
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        169,
        315
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            184,
            315
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getA",
                "optional": false,
                "range": [
                  190,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 8,
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
                  194,
                  313
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": true,
                            "key": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "range": [
                                  236,
                                  244
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 14
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test1",
                                "optional": false,
                                "range": [
                                  245,
                                  250
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                236,
                                250
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 14
                                },
                                "start": {
                                  "column": 13,
                                  "line": 14
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "'123'",
                              "value": "123",
                              "range": [
                                253,
                                258
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 14
                                },
                                "start": {
                                  "column": 30,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              235,
                              258
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 14
                              },
                              "start": {
                                "column": 12,
                                "line": 14
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": true,
                            "key": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TestEnum",
                                "optional": false,
                                "range": [
                                  273,
                                  281
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 15
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Test2",
                                "optional": false,
                                "range": [
                                  282,
                                  287
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                273,
                                287
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 15
                                },
                                "start": {
                                  "column": 13,
                                  "line": 15
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "'123'",
                              "value": "123",
                              "range": [
                                290,
                                295
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 15
                                },
                                "start": {
                                  "column": 30,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              272,
                              295
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 15
                              },
                              "start": {
                                "column": 12,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "range": [
                          221,
                          306
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        214,
                        307
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    204,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 18,
                      "line": 12
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
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  },
                  "range": [
                    196,
                    203
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ITest",
                      "optional": false,
                      "range": [
                        198,
                        203
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      198,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "range": [
                190,
                313
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
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
              "line": 18
            },
            "start": {
              "column": 15,
              "line": 11
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            182,
            183
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          176,
          315
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
      "line": 18
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
    172
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./class'",
        "value": "./class",
        "range": [
          18,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        28
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        30,
        172
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            55,
            172
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getA",
                "optional": false,
                "range": [
                  61,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
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
                  65,
                  170
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "range": [
                                    118,
                                    123
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 6
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getA",
                                  "optional": false,
                                  "range": [
                                    124,
                                    128
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  118,
                                  128
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 6
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                118,
                                130
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 6
                                },
                                "start": {
                                  "column": 15,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              115,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 6
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                144,
                                145
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 7
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "'123'",
                              "value": "123",
                              "range": [
                                147,
                                152
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 7
                                },
                                "start": {
                                  "column": 15,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              144,
                              152
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          101,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        94,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    68,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
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
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "range": [
                61,
                170
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 25,
              "line": 3
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            43,
            44
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            53,
            54
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        },
        "range": [
          37,
          172
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
