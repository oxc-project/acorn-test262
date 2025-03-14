__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1848
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
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
                  "name": "unused",
                  "optional": false,
                  "range": [
                    43,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "20",
                  "value": 20,
                  "range": [
                    52,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                "range": [
                  43,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              39,
              55
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
          }
        ],
        "range": [
          33,
          57
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 33,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "range": [
          9,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            },
            "range": [
              23,
              31
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                25,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            }
          },
          "range": [
            17,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        57
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          111,
          575
        ],
        "body": [
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
              "name": "unusedprivatevariable",
              "optional": false,
              "range": [
                125,
                146
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
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
                  "column": 41,
                  "line": 6
                },
                "start": {
                  "column": 33,
                  "line": 6
                }
              },
              "range": [
                146,
                154
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  148,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 6
                  },
                  "start": {
                    "column": 35,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              117,
              155
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
              "name": "greeting",
              "optional": false,
              "range": [
                168,
                176
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
            },
            "optional": false,
            "override": false,
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
                176,
                184
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  178,
                  184
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
            "value": null,
            "range": [
              160,
              185
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
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "unusedpublicvariable",
              "optional": false,
              "range": [
                197,
                217
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
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
                  "column": 39,
                  "line": 8
                },
                "start": {
                  "column": 31,
                  "line": 8
                }
              },
              "range": [
                217,
                225
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  219,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 8
                  },
                  "start": {
                    "column": 33,
                    "line": 8
                  }
                }
              }
            },
            "value": null,
            "range": [
              190,
              226
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
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
              "name": "typedvariable",
              "optional": false,
              "range": [
                238,
                251
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 11,
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
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
                }
              },
              "range": [
                251,
                270
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "usedtypeparameter",
                  "optional": false,
                  "range": [
                    253,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 9
                    },
                    "start": {
                      "column": 26,
                      "line": 9
                    }
                  }
                },
                "range": [
                  253,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 9
                  },
                  "start": {
                    "column": 26,
                    "line": 9
                  }
                }
              }
            },
            "value": null,
            "range": [
              231,
              271
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                277,
                288
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                288,
                380
              ],
              "async": false,
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
                          "name": "unused2",
                          "optional": false,
                          "range": [
                            320,
                            327
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "22",
                          "value": 22,
                          "range": [
                            330,
                            332
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 12
                            },
                            "start": {
                              "column": 22,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          320,
                          332
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      316,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
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
                            342,
                            346
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "range": [
                            347,
                            355
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 13
                            },
                            "start": {
                              "column": 13,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          342,
                          355
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"Dummy Message\"",
                        "value": "Dummy Message",
                        "range": [
                          358,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 13
                          },
                          "start": {
                            "column": 24,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        342,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      342,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
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
                  306,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 33,
                    "line": 11
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
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    },
                    "range": [
                      296,
                      304
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        298,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 11
                        },
                        "start": {
                          "column": 25,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    289,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "range": [
              277,
              380
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 11
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
              "name": "greeter",
              "optional": false,
              "range": [
                393,
                400
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 16
                },
                "start": {
                  "column": 11,
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
                400,
                485
              ],
              "async": false,
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
                          "name": "unused",
                          "optional": false,
                          "range": [
                            431,
                            437
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 17
                            },
                            "start": {
                              "column": 12,
                              "line": 17
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "20",
                          "value": 20,
                          "range": [
                            440,
                            442
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 17
                            },
                            "start": {
                              "column": 21,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          431,
                          442
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      427,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
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
                          "type": "ThisExpression",
                          "range": [
                            452,
                            456
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 18
                            },
                            "start": {
                              "column": 8,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "usedPrivateFunction",
                          "optional": false,
                          "range": [
                            457,
                            476
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 18
                            },
                            "start": {
                              "column": 13,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          452,
                          476
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 18
                          },
                          "start": {
                            "column": 8,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        452,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      452,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  417,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 35,
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
                  "name": "person",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 16
                      },
                      "start": {
                        "column": 25,
                        "line": 16
                      }
                    },
                    "range": [
                      407,
                      415
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        409,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 16
                        },
                        "start": {
                          "column": 27,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    401,
                    415
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 16
                    },
                    "start": {
                      "column": 19,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 16
                }
              }
            },
            "range": [
              386,
              485
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 16
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
              "name": "usedPrivateFunction",
              "optional": false,
              "range": [
                499,
                518
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
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
                518,
                528
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  521,
                  528
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 34,
                    "line": 21
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
                  "line": 22
                },
                "start": {
                  "column": 31,
                  "line": 21
                }
              }
            },
            "range": [
              491,
              528
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 21
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
              "name": "unUsedPrivateFunction",
              "optional": false,
              "range": [
                542,
                563
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
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
                563,
                573
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  566,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 36,
                    "line": 24
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
                  "line": 25
                },
                "start": {
                  "column": 33,
                  "line": 24
                }
              }
            },
            "range": [
              534,
              573
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
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
        "name": "Dummy",
        "optional": false,
        "range": [
          65,
          70
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        },
        "range": [
          70,
          110
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "usedtypeparameter",
              "optional": false,
              "range": [
                71,
                88
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              71,
              88
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "unusedtypeparameter",
              "optional": false,
              "range": [
                90,
                109
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              90,
              109
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        59,
        575
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
            "name": "user",
            "optional": false,
            "range": [
              581,
              585
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"Jane User\"",
            "value": "Jane User",
            "range": [
              588,
              599
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 28
              },
              "start": {
                "column": 11,
                "line": 28
              }
            }
          },
          "range": [
            581,
            599
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        577,
        600
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "user2",
            "optional": false,
            "range": [
              605,
              610
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"Jane2 User2\"",
            "value": "Jane2 User2",
            "range": [
              613,
              626
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 29
              },
              "start": {
                "column": 12,
                "line": 29
              }
            }
          },
          "range": [
            605,
            626
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        601,
        627
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
              656,
              738
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  689,
                  738
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "range": [
                        699,
                        711
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 33
                            },
                            "start": {
                              "column": 22,
                              "line": 33
                            }
                          },
                          "range": [
                            713,
                            721
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              715,
                              721
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 33
                              },
                              "start": {
                                "column": 24,
                                "line": 33
                              }
                            }
                          }
                        },
                        "range": [
                          712,
                          721
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 33
                          },
                          "start": {
                            "column": 21,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 33
                        },
                        "start": {
                          "column": 31,
                          "line": 33
                        }
                      },
                      "range": [
                        722,
                        731
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          724,
                          731
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 33
                          },
                          "start": {
                            "column": 33,
                            "line": 33
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      699,
                      732
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 37,
                    "line": 32
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringValidator",
                "optional": false,
                "range": [
                  673,
                  688
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 32
                  },
                  "start": {
                    "column": 21,
                    "line": 32
                  }
                }
              },
              "range": [
                663,
                738
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 32
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
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
                  "name": "lettersRegexp",
                  "optional": false,
                  "range": [
                    750,
                    763
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 36
                    },
                    "start": {
                      "column": 10,
                      "line": 36
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[A-Za-z]+$"
                  },
                  "value": null,
                  "range": [
                    766,
                    779
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 36
                    },
                    "start": {
                      "column": 26,
                      "line": 36
                    }
                  }
                },
                "range": [
                  750,
                  779
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              744,
              780
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                  "name": "numberRegexp",
                  "optional": false,
                  "range": [
                    791,
                    803
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 37
                    },
                    "start": {
                      "column": 10,
                      "line": 37
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "/^[0-9]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[0-9]+$"
                  },
                  "value": null,
                  "range": [
                    806,
                    816
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 37
                    },
                    "start": {
                      "column": 25,
                      "line": 37
                    }
                  }
                },
                "range": [
                  791,
                  816
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 37
                  },
                  "start": {
                    "column": 10,
                    "line": 37
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              785,
              817
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              823,
              1032
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  884,
                  1032
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "range": [
                        894,
                        906
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
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
                        906,
                        973
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s2",
                                  "optional": false,
                                  "range": [
                                    959,
                                    961
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 41
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
                                  "name": "lettersRegexp",
                                  "optional": false,
                                  "range": [
                                    940,
                                    953
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 41
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "range": [
                                    954,
                                    958
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 41
                                    }
                                  }
                                },
                                "range": [
                                  940,
                                  958
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 41
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                940,
                                962
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 41
                                },
                                "start": {
                                  "column": 19,
                                  "line": 41
                                }
                              }
                            },
                            "range": [
                              933,
                              963
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 41
                              },
                              "start": {
                                "column": 12,
                                "line": 41
                              }
                            }
                          }
                        ],
                        "range": [
                          919,
                          973
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 42
                          },
                          "start": {
                            "column": 33,
                            "line": 40
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
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 40
                              },
                              "start": {
                                "column": 23,
                                "line": 40
                              }
                            },
                            "range": [
                              909,
                              917
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                911,
                                917
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 40
                                },
                                "start": {
                                  "column": 25,
                                  "line": 40
                                }
                              }
                            }
                          },
                          "range": [
                            907,
                            917
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 40
                            },
                            "start": {
                              "column": 21,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 42
                        },
                        "start": {
                          "column": 20,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      894,
                      973
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 40
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
                      "name": "unUsedPrivateFunction",
                      "optional": false,
                      "range": [
                        991,
                        1012
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 44
                        },
                        "start": {
                          "column": 16,
                          "line": 44
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
                        1012,
                        1026
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          1015,
                          1026
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 45
                          },
                          "start": {
                            "column": 40,
                            "line": 44
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
                          "column": 9,
                          "line": 45
                        },
                        "start": {
                          "column": 37,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      983,
                      1026
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 44
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 65,
                    "line": 39
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LettersOnlyValidator",
                "optional": false,
                "range": [
                  836,
                  856
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 39
                  },
                  "start": {
                    "column": 17,
                    "line": 39
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringValidator",
                    "optional": false,
                    "range": [
                      868,
                      883
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 39
                      },
                      "start": {
                        "column": 49,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    868,
                    883
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 39
                    },
                    "start": {
                      "column": 49,
                      "line": 39
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                830,
                1032
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 11,
                  "line": 39
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1038,
              1183
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1095,
                  1183
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAcceptable",
                      "optional": false,
                      "range": [
                        1105,
                        1117
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 49
                        },
                        "start": {
                          "column": 8,
                          "line": 49
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
                        1117,
                        1177
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s3",
                                  "optional": false,
                                  "range": [
                                    1151,
                                    1153
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 50
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
                                    1154,
                                    1160
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 50
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 50
                                    }
                                  }
                                },
                                "range": [
                                  1151,
                                  1160
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 50
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "5",
                                "value": 5,
                                "range": [
                                  1165,
                                  1166
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 50
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 50
                                  }
                                }
                              },
                              "range": [
                                1151,
                                1166
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 50
                                },
                                "start": {
                                  "column": 19,
                                  "line": 50
                                }
                              }
                            },
                            "range": [
                              1144,
                              1167
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 50
                              },
                              "start": {
                                "column": 12,
                                "line": 50
                              }
                            }
                          }
                        ],
                        "range": [
                          1130,
                          1177
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 51
                          },
                          "start": {
                            "column": 33,
                            "line": 49
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
                          "name": "s3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 49
                              },
                              "start": {
                                "column": 23,
                                "line": 49
                              }
                            },
                            "range": [
                              1120,
                              1128
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                1122,
                                1128
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 49
                                },
                                "start": {
                                  "column": 25,
                                  "line": 49
                                }
                              }
                            }
                          },
                          "range": [
                            1118,
                            1128
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 49
                            },
                            "start": {
                              "column": 21,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 51
                        },
                        "start": {
                          "column": 20,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1105,
                      1177
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 52
                  },
                  "start": {
                    "column": 61,
                    "line": 48
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ZipCodeValidator",
                "optional": false,
                "range": [
                  1051,
                  1067
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 48
                  },
                  "start": {
                    "column": 17,
                    "line": 48
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StringValidator",
                    "optional": false,
                    "range": [
                      1079,
                      1094
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 48
                      },
                      "start": {
                        "column": 45,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1079,
                    1094
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 48
                    },
                    "start": {
                      "column": 45,
                      "line": 48
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                1045,
                1183
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 11,
                  "line": 48
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1220,
                1227
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 35,
                  "line": 54
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "usedLocallyInterface",
              "optional": false,
              "range": [
                1199,
                1219
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 54
                },
                "start": {
                  "column": 14,
                  "line": 54
                }
              }
            },
            "range": [
              1189,
              1227
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1265,
                1312
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "someFunction",
                    "optional": false,
                    "range": [
                      1275,
                      1287
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 58
                          },
                          "start": {
                            "column": 23,
                            "line": 58
                          }
                        },
                        "range": [
                          1290,
                          1298
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1292,
                            1298
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 58
                            },
                            "start": {
                              "column": 25,
                              "line": 58
                            }
                          }
                        }
                      },
                      "range": [
                        1288,
                        1298
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 58
                        },
                        "start": {
                          "column": 21,
                          "line": 58
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 58
                      },
                      "start": {
                        "column": 32,
                        "line": 58
                      }
                    },
                    "range": [
                      1299,
                      1305
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        1301,
                        1305
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 58
                        },
                        "start": {
                          "column": 34,
                          "line": 58
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1275,
                    1306
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 36,
                  "line": 57
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "usedLocallyInterface2",
              "optional": false,
              "range": [
                1243,
                1264
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 57
                },
                "start": {
                  "column": 14,
                  "line": 57
                }
              }
            },
            "range": [
              1233,
              1312
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1318,
              1360
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1353,
                  1360
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 62
                  },
                  "start": {
                    "column": 39,
                    "line": 61
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exportedInterface",
                "optional": false,
                "range": [
                  1335,
                  1352
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 61
                  },
                  "start": {
                    "column": 21,
                    "line": 61
                  }
                }
              },
              "range": [
                1325,
                1360
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 62
                },
                "start": {
                  "column": 11,
                  "line": 61
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1410,
                1417
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 65
                },
                "start": {
                  "column": 48,
                  "line": 64
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "dummy",
              "optional": false,
              "range": [
                1372,
                1377
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 64
                },
                "start": {
                  "column": 10,
                  "line": 64
                }
              }
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "usedLocallyInterface",
                  "optional": false,
                  "range": [
                    1389,
                    1409
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 64
                    },
                    "start": {
                      "column": 27,
                      "line": 64
                    }
                  }
                },
                "range": [
                  1389,
                  1409
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 64
                  },
                  "start": {
                    "column": 27,
                    "line": 64
                  }
                }
              }
            ],
            "superClass": null,
            "range": [
              1366,
              1417
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1449,
                1456
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 30,
                  "line": 67
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "unusedInterface",
              "optional": false,
              "range": [
                1433,
                1448
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 67
                },
                "start": {
                  "column": 14,
                  "line": 67
                }
              }
            },
            "range": [
              1423,
              1456
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          }
        ],
        "range": [
          650,
          1458
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 21,
            "line": 31
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          639,
          649
        ],
        "decorators": [],
        "name": "Validation",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 31
          },
          "start": {
            "column": 10,
            "line": 31
          }
        }
      },
      "kind": "namespace",
      "range": [
        629,
        1458
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1498,
                1505
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 74
                },
                "start": {
                  "column": 17,
                  "line": 73
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "class1",
              "optional": false,
              "range": [
                1491,
                1497
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 73
                },
                "start": {
                  "column": 10,
                  "line": 73
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              1485,
              1505
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1511,
              1553
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1546,
                  1553
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 77
                  },
                  "start": {
                    "column": 39,
                    "line": 76
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "class2",
                "optional": false,
                "range": [
                  1524,
                  1530
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 76
                  },
                  "start": {
                    "column": 17,
                    "line": 76
                  }
                }
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "class1",
                "optional": false,
                "range": [
                  1539,
                  1545
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 76
                  },
                  "start": {
                    "column": 32,
                    "line": 76
                  }
                }
              },
              "range": [
                1518,
                1553
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 77
                },
                "start": {
                  "column": 11,
                  "line": 76
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1572,
                1579
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 80
                },
                "start": {
                  "column": 17,
                  "line": 79
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "class3",
              "optional": false,
              "range": [
                1565,
                1571
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 79
                },
                "start": {
                  "column": 10,
                  "line": 79
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              1559,
              1579
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1585,
              1612
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1605,
                  1612
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 83
                  },
                  "start": {
                    "column": 24,
                    "line": 82
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "class4",
                "optional": false,
                "range": [
                  1598,
                  1604
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 82
                  },
                  "start": {
                    "column": 17,
                    "line": 82
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                1592,
                1612
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 11,
                  "line": 82
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1639,
                1646
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 86
                },
                "start": {
                  "column": 25,
                  "line": 85
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "interface1",
              "optional": false,
              "range": [
                1628,
                1638
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 85
                },
                "start": {
                  "column": 14,
                  "line": 85
                }
              }
            },
            "range": [
              1618,
              1646
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1652,
              1706
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1699,
                  1706
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 89
                  },
                  "start": {
                    "column": 51,
                    "line": 88
                  }
                }
              },
              "declare": false,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "interface1",
                    "optional": false,
                    "range": [
                      1688,
                      1698
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 88
                      },
                      "start": {
                        "column": 40,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1688,
                    1698
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 88
                    },
                    "start": {
                      "column": 40,
                      "line": 88
                    }
                  }
                }
              ],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "interface2",
                "optional": false,
                "range": [
                  1669,
                  1679
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 88
                  },
                  "start": {
                    "column": 21,
                    "line": 88
                  }
                }
              },
              "range": [
                1659,
                1706
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 89
                },
                "start": {
                  "column": 11,
                  "line": 88
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1733,
                1740
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 92
                },
                "start": {
                  "column": 25,
                  "line": 91
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "interface3",
              "optional": false,
              "range": [
                1722,
                1732
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 91
                },
                "start": {
                  "column": 14,
                  "line": 91
                }
              }
            },
            "range": [
              1712,
              1740
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1746,
              1781
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  1774,
                  1781
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 95
                  },
                  "start": {
                    "column": 32,
                    "line": 94
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "interface4",
                "optional": false,
                "range": [
                  1763,
                  1773
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 94
                  },
                  "start": {
                    "column": 21,
                    "line": 94
                  }
                }
              },
              "range": [
                1753,
                1781
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 95
                },
                "start": {
                  "column": 11,
                  "line": 94
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1787,
              1812
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 97
                        },
                        "start": {
                          "column": 16,
                          "line": 97
                        }
                      },
                      "range": [
                        1799,
                        1811
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "interface3",
                          "optional": false,
                          "range": [
                            1801,
                            1811
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 97
                            },
                            "start": {
                              "column": 18,
                              "line": 97
                            }
                          }
                        },
                        "range": [
                          1801,
                          1811
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 97
                          },
                          "start": {
                            "column": 18,
                            "line": 97
                          }
                        }
                      }
                    },
                    "range": [
                      1798,
                      1811
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 97
                      },
                      "start": {
                        "column": 15,
                        "line": 97
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    1798,
                    1811
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 97
                    },
                    "start": {
                      "column": 15,
                      "line": 97
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1794,
                1812
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 97
                },
                "start": {
                  "column": 11,
                  "line": 97
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 29,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 97
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                1839,
                1846
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 100
                },
                "start": {
                  "column": 25,
                  "line": 99
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "interface5",
              "optional": false,
              "range": [
                1828,
                1838
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 99
                },
                "start": {
                  "column": 14,
                  "line": 99
                }
              }
            },
            "range": [
              1818,
              1846
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          }
        ],
        "range": [
          1479,
          1848
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 101
          },
          "start": {
            "column": 18,
            "line": 72
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1471,
          1478
        ],
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "loc": {
          "end": {
            "column": 17,
            "line": 72
          },
          "start": {
            "column": 10,
            "line": 72
          }
        }
      },
      "kind": "namespace",
      "range": [
        1461,
        1848
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 101
        },
        "start": {
          "column": 0,
          "line": 72
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 101
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
