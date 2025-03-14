__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    13,
    518
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          30,
          56
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDist",
              "optional": false,
              "range": [
                36,
                43
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
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
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              36,
              54
            ],
            "loc": {
              "end": {
                "column": 22,
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
            "column": 17,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPoint",
        "optional": false,
        "range": [
          23,
          29
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        13,
        56
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
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              102,
              430
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  139,
                  430
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "con",
                      "optional": false,
                      "range": [
                        157,
                        160
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
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 18,
                          "line": 12
                        }
                      },
                      "range": [
                        160,
                        169
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "\"hello\"",
                          "value": "hello",
                          "range": [
                            162,
                            169
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 12
                            },
                            "start": {
                              "column": 20,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          162,
                          169
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 12
                          },
                          "start": {
                            "column": 20,
                            "line": 12
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      150,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
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
                        202,
                        213
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
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
                        214,
                        254
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          251,
                          254
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 14
                          },
                          "start": {
                            "column": 57,
                            "line": 14
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
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 14
                                },
                                "start": {
                                  "column": 29,
                                  "line": 14
                                }
                              },
                              "range": [
                                223,
                                231
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  225,
                                  231
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 14
                                  }
                                }
                              }
                            },
                            "range": [
                              222,
                              231
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 14
                              },
                              "start": {
                                "column": 28,
                                "line": 14
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            215,
                            231
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 14
                            },
                            "start": {
                              "column": 21,
                              "line": 14
                            }
                          }
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 14
                                },
                                "start": {
                                  "column": 47,
                                  "line": 14
                                }
                              },
                              "range": [
                                241,
                                249
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  243,
                                  249
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 14
                                  }
                                }
                              }
                            },
                            "range": [
                              240,
                              249
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 14
                              },
                              "start": {
                                "column": 46,
                                "line": 14
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            233,
                            249
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 14
                            },
                            "start": {
                              "column": 39,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 14
                        },
                        "start": {
                          "column": 20,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      202,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
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
                      "name": "getDist",
                      "optional": false,
                      "range": [
                        291,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
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
                        298,
                        357
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          320,
                                          324
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          325,
                                          326
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "range": [
                                        320,
                                        326
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          329,
                                          333
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 50,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          334,
                                          335
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 51,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "range": [
                                        329,
                                        335
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "range": [
                                      320,
                                      335
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          338,
                                          342
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 59,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 55,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "range": [
                                          343,
                                          344
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 61,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 60,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "range": [
                                        338,
                                        344
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 55,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          347,
                                          351
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 68,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 64,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "range": [
                                          352,
                                          353
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 70,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 69,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "range": [
                                        347,
                                        353
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 70,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 64,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "range": [
                                      338,
                                      353
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    320,
                                    353
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 70,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 17
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
                                  "name": "Math",
                                  "optional": false,
                                  "range": [
                                    310,
                                    314
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 17
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "range": [
                                    315,
                                    319
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 17
                                    }
                                  }
                                },
                                "range": [
                                  310,
                                  319
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 17
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                310,
                                354
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 17
                                },
                                "start": {
                                  "column": 27,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              303,
                              355
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 17
                              },
                              "start": {
                                "column": 20,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "range": [
                          301,
                          357
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 17
                          },
                          "start": {
                            "column": 18,
                            "line": 17
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
                          "column": 74,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      291,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
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
                      "name": "origin",
                      "optional": false,
                      "range": [
                        399,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 20
                        },
                        "start": {
                          "column": 15,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            418,
                            419
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 20
                            },
                            "start": {
                              "column": 34,
                              "line": 20
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            421,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 20
                            },
                            "start": {
                              "column": 37,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "range": [
                          412,
                          417
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 20
                          },
                          "start": {
                            "column": 28,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        408,
                        423
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 20
                        },
                        "start": {
                          "column": 24,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      392,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 41,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  115,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IPoint",
                    "optional": false,
                    "range": [
                      132,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 10
                      },
                      "start": {
                        "column": 34,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    132,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 10
                    },
                    "start": {
                      "column": 34,
                      "line": 10
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                109,
                430
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          82,
          433
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 14,
            "line": 7
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          75,
          81
        ],
        "decorators": [],
        "name": "Shapes",
        "optional": false,
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "kind": "module",
      "range": [
        68,
        433
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 5,
                  "line": 26
                }
              },
              "range": [
                459,
                467
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPoint",
                  "optional": false,
                  "range": [
                    461,
                    467
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 26
                    },
                    "start": {
                      "column": 7,
                      "line": 26
                    }
                  }
                },
                "range": [
                  461,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 7,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              458,
              467
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  487,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 26
                  },
                  "start": {
                    "column": 33,
                    "line": 26
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  490,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 26
                  },
                  "start": {
                    "column": 36,
                    "line": 26
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
                "name": "Shapes",
                "optional": false,
                "range": [
                  474,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 26
                  },
                  "start": {
                    "column": 20,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  481,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 26
                  },
                  "start": {
                    "column": 27,
                    "line": 26
                  }
                }
              },
              "range": [
                474,
                486
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 26
                },
                "start": {
                  "column": 20,
                  "line": 26
                }
              }
            },
            "range": [
              470,
              492
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 26
              },
              "start": {
                "column": 16,
                "line": 26
              }
            }
          },
          "range": [
            458,
            492
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        454,
        493
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "dist",
            "optional": false,
            "range": [
              498,
              502
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "range": [
                  505,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDist",
                "optional": false,
                "range": [
                  507,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 27
                  },
                  "start": {
                    "column": 13,
                    "line": 27
                  }
                }
              },
              "range": [
                505,
                514
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              505,
              516
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 27
              },
              "start": {
                "column": 11,
                "line": 27
              }
            }
          },
          "range": [
            498,
            516
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        494,
        517
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
