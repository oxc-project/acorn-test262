__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    346
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          16,
          36
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                22,
                25
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                25,
                33
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  27,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              22,
              34
            ],
            "loc": {
              "end": {
                "column": 16,
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
            "column": 16,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IText",
        "optional": false,
        "range": [
          10,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
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
        36
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
          57,
          59
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 21,
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextSpan",
        "optional": false,
        "range": [
          48,
          56
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        38,
        59
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 5
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
          92,
          178
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                103,
                114
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 8,
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
                114,
                176
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
                        "type": "Super",
                        "range": [
                          158,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        158,
                        165
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      158,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  144,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 49,
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
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 9
                      },
                      "start": {
                        "column": 24,
                        "line": 9
                      }
                    },
                    "range": [
                      119,
                      126
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IText",
                        "optional": false,
                        "range": [
                          121,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 9
                          },
                          "start": {
                            "column": 26,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        121,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    115,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "span",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 9
                      },
                      "start": {
                        "column": 37,
                        "line": 9
                      }
                    },
                    "range": [
                      132,
                      142
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TextSpan",
                        "optional": false,
                        "range": [
                          134,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 9
                          },
                          "start": {
                            "column": 39,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        134,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 9
                        },
                        "start": {
                          "column": 39,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    128,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 9
                    },
                    "start": {
                      "column": 33,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "range": [
              103,
              176
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 31,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubText",
        "optional": false,
        "range": [
          67,
          74
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextBase",
        "optional": false,
        "range": [
          83,
          91
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 7
          },
          "start": {
            "column": 22,
            "line": 7
          }
        }
      },
      "range": [
        61,
        178
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          212,
          346
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
              "name": "foo",
              "optional": false,
              "range": [
                229,
                232
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 15,
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
                  "column": 26,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
                }
              },
              "range": [
                232,
                240
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  234,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              }
            },
            "value": null,
            "range": [
              222,
              241
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subText",
              "optional": false,
              "range": [
                257,
                264
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
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
                264,
                344
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "range": [
                            322,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 18
                            },
                            "start": {
                              "column": 31,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "span",
                          "optional": false,
                          "range": [
                            328,
                            332
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 18
                            },
                            "start": {
                              "column": 37,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SubText",
                        "optional": false,
                        "range": [
                          314,
                          321
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 18
                          },
                          "start": {
                            "column": 23,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        310,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 18
                        },
                        "start": {
                          "column": 19,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      303,
                      334
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 18
                      },
                      "start": {
                        "column": 12,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  288,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 19
                  },
                  "start": {
                    "column": 46,
                    "line": 16
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
                  "name": "span",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 16
                      },
                      "start": {
                        "column": 27,
                        "line": 16
                      }
                    },
                    "range": [
                      269,
                      279
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TextSpan",
                        "optional": false,
                        "range": [
                          271,
                          279
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 16
                          },
                          "start": {
                            "column": 29,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        271,
                        279
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 16
                        },
                        "start": {
                          "column": 29,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    265,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 16
                    },
                    "start": {
                      "column": 23,
                      "line": 16
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 16
                  },
                  "start": {
                    "column": 38,
                    "line": 16
                  }
                },
                "range": [
                  280,
                  287
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IText",
                    "optional": false,
                    "range": [
                      282,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 16
                      },
                      "start": {
                        "column": 40,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    282,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 16
                    },
                    "start": {
                      "column": 40,
                      "line": 16
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 22,
                  "line": 16
                }
              }
            },
            "range": [
              250,
              344
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 32,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextBase",
        "optional": false,
        "range": [
          186,
          194
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IText",
            "optional": false,
            "range": [
              206,
              211
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 14
              },
              "start": {
                "column": 26,
                "line": 14
              }
            }
          },
          "range": [
            206,
            211
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 14
            },
            "start": {
              "column": 26,
              "line": 14
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        180,
        346
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
      "column": 1,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
