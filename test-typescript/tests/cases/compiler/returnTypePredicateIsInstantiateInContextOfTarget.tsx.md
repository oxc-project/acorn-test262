__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    401
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          67,
          74
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              56,
              61
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            51,
            61
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        44,
        75
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 2
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
          158,
          356
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
              "name": "defaultProps",
              "optional": false,
              "range": [
                171,
                183
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isAny",
                    "optional": false,
                    "range": [
                      196,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestComponent",
                      "optional": false,
                      "range": [
                        203,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isAny",
                      "optional": false,
                      "range": [
                        217,
                        222
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 5
                        },
                        "start": {
                          "column": 29,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      203,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    196,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
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
                186,
                228
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 4
                }
              }
            },
            "range": [
              164,
              228
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
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isAny",
              "optional": false,
              "range": [
                297,
                302
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                302,
                354
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        343,
                        347
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      336,
                      348
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
                  }
                ],
                "range": [
                  326,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 40,
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 23,
                        "line": 9
                      }
                    },
                    "range": [
                      309,
                      314
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        311,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 25,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    306,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 20,
                      "line": 9
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                },
                "range": [
                  315,
                  325
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      317,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 9
                      },
                      "start": {
                        "column": 31,
                        "line": 9
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 9
                      },
                      "start": {
                        "column": 38,
                        "line": 9
                      }
                    },
                    "range": [
                      324,
                      325
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          324,
                          325
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 9
                          },
                          "start": {
                            "column": 38,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        324,
                        325
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 9
                        },
                        "start": {
                          "column": 38,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    317,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 9
                    },
                    "start": {
                      "column": 31,
                      "line": 9
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
                  }
                },
                "range": [
                  302,
                  305
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        303,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 9
                        },
                        "start": {
                          "column": 17,
                          "line": 9
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      303,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 9
                      },
                      "start": {
                        "column": 17,
                        "line": 9
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "range": [
              290,
              354
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
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
            "line": 12
          },
          "start": {
            "column": 82,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestComponent",
        "optional": false,
        "range": [
          82,
          95
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
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
            104,
            109
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 28,
              "line": 3
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
            110,
            119
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        },
        "range": [
          104,
          119
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 3
          },
          "start": {
            "column": 28,
            "line": 3
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          119,
          157
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
                  "name": "isAny",
                  "optional": false,
                  "range": [
                    122,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 3
                    },
                    "start": {
                      "column": 46,
                      "line": 3
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
                      "column": 78,
                      "line": 3
                    },
                    "start": {
                      "column": 51,
                      "line": 3
                    }
                  },
                  "range": [
                    127,
                    154
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 3
                            },
                            "start": {
                              "column": 60,
                              "line": 3
                            }
                          },
                          "range": [
                            136,
                            141
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              138,
                              141
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 3
                              },
                              "start": {
                                "column": 62,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          133,
                          141
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 3
                          },
                          "start": {
                            "column": 57,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 3
                        },
                        "start": {
                          "column": 67,
                          "line": 3
                        }
                      },
                      "range": [
                        143,
                        154
                      ],
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            146,
                            149
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 3
                            },
                            "start": {
                              "column": 70,
                              "line": 3
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 3
                            },
                            "start": {
                              "column": 77,
                              "line": 3
                            }
                          },
                          "range": [
                            153,
                            154
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                153,
                                154
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 3
                                },
                                "start": {
                                  "column": 77,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              153,
                              154
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 3
                              },
                              "start": {
                                "column": 77,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          146,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 3
                          },
                          "start": {
                            "column": 70,
                            "line": 3
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 3
                        },
                        "start": {
                          "column": 53,
                          "line": 3
                        }
                      },
                      "range": [
                        129,
                        132
                      ],
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              130,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 3
                              },
                              "start": {
                                "column": 54,
                                "line": 3
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            130,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 3
                            },
                            "start": {
                              "column": 54,
                              "line": 3
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      129,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 3
                      },
                      "start": {
                        "column": 53,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  122,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 3
                  },
                  "start": {
                    "column": 46,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              120,
              156
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 3
              },
              "start": {
                "column": 44,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 3
          },
          "start": {
            "column": 43,
            "line": 3
          }
        }
      },
      "range": [
        76,
        356
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
            "name": "TestRender",
            "optional": false,
            "range": [
              364,
              374
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "JSXElement",
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "range": [
                  383,
                  400
                ],
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "TestComponent",
                  "range": [
                    384,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 14
                    },
                    "start": {
                      "column": 26,
                      "line": 14
                    }
                  }
                },
                "selfClosing": true,
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 14
                  },
                  "start": {
                    "column": 25,
                    "line": 14
                  }
                }
              },
              "range": [
                383,
                400
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 14
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              377,
              400
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 14
              },
              "start": {
                "column": 19,
                "line": 14
              }
            }
          },
          "range": [
            364,
            400
          ],
          "loc": {
            "end": {
              "column": 42,
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
        358,
        401
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 14
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
      "column": 43,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
