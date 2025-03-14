__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    516
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
        "name": "createInstance",
        "optional": false,
        "range": [
          39,
          53
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ctor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 114,
                "line": 3
              },
              "start": {
                "column": 108,
                "line": 3
              }
            },
            "range": [
              130,
              136
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ctor",
                "optional": false,
                "range": [
                  132,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 114,
                    "line": 3
                  },
                  "start": {
                    "column": 110,
                    "line": 3
                  }
                }
              },
              "range": [
                132,
                136
              ],
              "loc": {
                "end": {
                  "column": 114,
                  "line": 3
                },
                "start": {
                  "column": 110,
                  "line": 3
                }
              }
            }
          },
          "range": [
            126,
            136
          ],
          "loc": {
            "end": {
              "column": 114,
              "line": 3
            },
            "start": {
              "column": 104,
              "line": 3
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              141,
              145
            ],
            "loc": {
              "end": {
                "column": 123,
                "line": 3
              },
              "start": {
                "column": 119,
                "line": 3
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 152,
                "line": 3
              },
              "start": {
                "column": 123,
                "line": 3
              }
            },
            "range": [
              145,
              174
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  168,
                  174
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ctor",
                      "optional": false,
                      "range": [
                        169,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 151,
                          "line": 3
                        },
                        "start": {
                          "column": 147,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      169,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 151,
                        "line": 3
                      },
                      "start": {
                        "column": 147,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 152,
                    "line": 3
                  },
                  "start": {
                    "column": 146,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ConstructorParameters",
                "optional": false,
                "range": [
                  147,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 146,
                    "line": 3
                  },
                  "start": {
                    "column": 125,
                    "line": 3
                  }
                }
              },
              "range": [
                147,
                174
              ],
              "loc": {
                "end": {
                  "column": 152,
                  "line": 3
                },
                "start": {
                  "column": 125,
                  "line": 3
                }
              }
            }
          },
          "range": [
            138,
            174
          ],
          "loc": {
            "end": {
              "column": 152,
              "line": 3
            },
            "start": {
              "column": 116,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 156,
            "line": 3
          },
          "start": {
            "column": 153,
            "line": 3
          }
        },
        "range": [
          175,
          178
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "range": [
              177,
              178
            ],
            "loc": {
              "end": {
                "column": 156,
                "line": 3
              },
              "start": {
                "column": 155,
                "line": 3
              }
            }
          },
          "range": [
            177,
            178
          ],
          "loc": {
            "end": {
              "column": 156,
              "line": 3
            },
            "start": {
              "column": 155,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 103,
            "line": 3
          },
          "start": {
            "column": 31,
            "line": 3
          }
        },
        "range": [
          53,
          125
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSConstructorType",
              "abstract": false,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      75,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 3
                      },
                      "start": {
                        "column": 53,
                        "line": 3
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 3
                      },
                      "start": {
                        "column": 57,
                        "line": 3
                      }
                    },
                    "range": [
                      79,
                      86
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          81,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 3
                          },
                          "start": {
                            "column": 59,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        81,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 3
                        },
                        "start": {
                          "column": 59,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    72,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 3
                    },
                    "start": {
                      "column": 50,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 3
                  },
                  "start": {
                    "column": 66,
                    "line": 3
                  }
                },
                "range": [
                  88,
                  94
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    91,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 3
                    },
                    "start": {
                      "column": 69,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                67,
                94
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 3
                },
                "start": {
                  "column": 45,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Ctor",
              "optional": false,
              "range": [
                54,
                58
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              54,
              94
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 3
              },
              "start": {
                "column": 32,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  118,
                  124
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Ctor",
                      "optional": false,
                      "range": [
                        119,
                        123
                      ],
                      "loc": {
                        "end": {
                          "column": 101,
                          "line": 3
                        },
                        "start": {
                          "column": 97,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      119,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 101,
                        "line": 3
                      },
                      "start": {
                        "column": 97,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 3
                  },
                  "start": {
                    "column": 96,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InstanceType",
                "optional": false,
                "range": [
                  106,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 3
                  },
                  "start": {
                    "column": 84,
                    "line": 3
                  }
                }
              },
              "range": [
                106,
                124
              ],
              "loc": {
                "end": {
                  "column": 102,
                  "line": 3
                },
                "start": {
                  "column": 84,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                96,
                97
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 3
                },
                "start": {
                  "column": 74,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              96,
              124
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 3
              },
              "start": {
                "column": 74,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        179
      ],
      "loc": {
        "end": {
          "column": 157,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        181,
        292
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            227,
            292
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "toolbarOptions",
                "optional": false,
                "range": [
                  233,
                  247
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
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                },
                "range": [
                  247,
                  289
                ],
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          259,
                          262
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 15,
                                "line": 7
                              }
                            },
                            "range": [
                              266,
                              274
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                268,
                                274
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 7
                                },
                                "start": {
                                  "column": 17,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            263,
                            274
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 7
                          },
                          "start": {
                            "column": 24,
                            "line": 7
                          }
                        },
                        "range": [
                          275,
                          283
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            277,
                            283
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 7
                            },
                            "start": {
                              "column": 26,
                              "line": 7
                            }
                          }
                        }
                      },
                      "static": false,
                      "range": [
                        259,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
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
                    249,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                233,
                290
              ],
              "loc": {
                "end": {
                  "column": 6,
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
              "column": 46,
              "line": 5
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IMenuWorkbenchToolBarOptions",
          "optional": false,
          "range": [
            198,
            226
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 5
            },
            "start": {
              "column": 17,
              "line": 5
            }
          }
        },
        "range": [
          188,
          292
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 5
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
          321,
          410
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                327,
                338
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                338,
                408
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  405,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 14
                  },
                  "start": {
                    "column": 6,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    },
                    "range": [
                      355,
                      397
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IMenuWorkbenchToolBarOptions",
                            "optional": false,
                            "range": [
                              357,
                              385
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 13
                              },
                              "start": {
                                "column": 17,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            357,
                            385
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 13
                            },
                            "start": {
                              "column": 17,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            388,
                            397
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 13
                            },
                            "start": {
                              "column": 48,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        357,
                        397
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 13
                        },
                        "start": {
                          "column": 17,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    348,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "range": [
              327,
              408
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 14
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
            "line": 15
          },
          "start": {
            "column": 27,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MenuWorkbenchToolBar",
        "optional": false,
        "range": [
          300,
          320
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        294,
        410
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "MenuWorkbenchToolBar",
            "optional": false,
            "range": [
              427,
              447
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 17
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
                  "name": "toolbarOptions",
                  "optional": false,
                  "range": [
                    455,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          481,
                          484
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          484,
                          505
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  499,
                                  502
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                492,
                                503
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 19
                                },
                                "start": {
                                  "column": 19,
                                  "line": 19
                                }
                              }
                            }
                          ],
                          "range": [
                            490,
                            505
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 19
                            },
                            "start": {
                              "column": 17,
                              "line": 19
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
                            "name": "bar",
                            "optional": false,
                            "range": [
                              485,
                              488
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 19
                              },
                              "start": {
                                "column": 12,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 19
                          },
                          "start": {
                            "column": 11,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        481,
                        505
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    471,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 20
                    },
                    "start": {
                      "column": 20,
                      "line": 18
                    }
                  }
                },
                "range": [
                  455,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              449,
              513
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 21
              },
              "start": {
                "column": 37,
                "line": 17
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createInstance",
          "optional": false,
          "range": [
            412,
            426
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "range": [
          412,
          514
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        412,
        515
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 21
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
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
