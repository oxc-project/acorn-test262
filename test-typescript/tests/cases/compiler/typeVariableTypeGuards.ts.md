__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    1442
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          36,
          55
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                42,
                45
              ],
              "loc": {
                "end": {
                  "column": 7,
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
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              },
              "range": [
                47,
                53
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  49,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              }
            },
            "static": false,
            "range": [
              42,
              53
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
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
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          32,
          35
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        22,
        55
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          89,
          207
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                95,
                106
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                106,
                136
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  134,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 8
                  },
                  "start": {
                    "column": 43,
                    "line": 8
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 8
                        },
                        "start": {
                          "column": 28,
                          "line": 8
                        }
                      },
                      "range": [
                        119,
                        132
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            129,
                            132
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "range": [
                                  130,
                                  131
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                130,
                                131
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 8
                                },
                                "start": {
                                  "column": 39,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 8
                            },
                            "start": {
                              "column": 38,
                              "line": 8
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Readonly",
                          "optional": false,
                          "range": [
                            121,
                            129
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 8
                            },
                            "start": {
                              "column": 30,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          121,
                          132
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 8
                          },
                          "start": {
                            "column": 30,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      114,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    107,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              95,
              136
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
              "name": "doSomething",
              "optional": false,
              "range": [
                141,
                152
              ],
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                152,
                205
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              165,
                              169
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
                            "name": "props",
                            "optional": false,
                            "range": [
                              170,
                              175
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 10
                              },
                              "start": {
                                "column": 13,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            165,
                            175
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
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
                          "name": "foo",
                          "optional": false,
                          "range": [
                            176,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 10
                            },
                            "start": {
                              "column": 19,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          165,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "right": {
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
                                183,
                                187
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 10
                                },
                                "start": {
                                  "column": 26,
                                  "line": 10
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "range": [
                                188,
                                193
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 10
                                },
                                "start": {
                                  "column": 31,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              183,
                              193
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 10
                              },
                              "start": {
                                "column": 26,
                                "line": 10
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
                              194,
                              197
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 10
                              },
                              "start": {
                                "column": 37,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            183,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 10
                            },
                            "start": {
                              "column": 26,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          183,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 10
                          },
                          "start": {
                            "column": 26,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        165,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      165,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
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
                  155,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 9
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
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            },
            "range": [
              141,
              205
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
            "column": 32,
            "line": 7
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
          63,
          64
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        },
        "range": [
          64,
          88
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  82,
                  87
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        83,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 7
                        },
                        "start": {
                          "column": 26,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      83,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 7
                      },
                      "start": {
                        "column": 26,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "range": [
                  75,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
                  }
                }
              },
              "range": [
                75,
                87
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                65,
                66
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              65,
              87
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        57,
        207
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          248,
          272
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "range": [
                254,
                259
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                  "column": 19,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              },
              "range": [
                259,
                269
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'yellow'",
                  "value": "yellow",
                  "range": [
                    261,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 17
                    },
                    "start": {
                      "column": 11,
                      "line": 17
                    }
                  }
                },
                "range": [
                  261,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              254,
              270
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
            "column": 17,
            "line": 16
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Banana",
        "optional": false,
        "range": [
          241,
          247
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "range": [
        231,
        272
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          317,
          431
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                323,
                334
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                334,
                350
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  348,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 21
                  },
                  "start": {
                    "column": 29,
                    "line": 21
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 24,
                          "line": 21
                        }
                      },
                      "range": [
                        343,
                        346
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            345,
                            346
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 21
                            },
                            "start": {
                              "column": 26,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          345,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 21
                          },
                          "start": {
                            "column": 26,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      342,
                      346
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 23,
                        "line": 21
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    335,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 21
                },
                "start": {
                  "column": 15,
                  "line": 21
                }
              }
            },
            "range": [
              323,
              350
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
              "name": "render",
              "optional": false,
              "range": [
                355,
                361
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                361,
                429
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  400,
                                  404
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 24
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  405,
                                  406
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 24
                                  }
                                }
                              },
                              "range": [
                                400,
                                406
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 24
                                },
                                "start": {
                                  "column": 12,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "range": [
                                407,
                                412
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 24
                                },
                                "start": {
                                  "column": 19,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              400,
                              412
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 24
                              },
                              "start": {
                                "column": 12,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            400,
                            413
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 24
                            },
                            "start": {
                              "column": 12,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        386,
                        423
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 25
                        },
                        "start": {
                          "column": 20,
                          "line": 23
                        }
                      }
                    },
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          378,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          383,
                          384
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 23
                          },
                          "start": {
                            "column": 17,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        378,
                        384
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 23
                        },
                        "start": {
                          "column": 12,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      374,
                      423
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  364,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 22
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
                  "line": 26
                },
                "start": {
                  "column": 10,
                  "line": 22
                }
              }
            },
            "range": [
              355,
              429
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 43,
            "line": 20
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Monkey",
        "optional": false,
        "range": [
          280,
          286
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 20
          },
          "start": {
            "column": 12,
            "line": 20
          }
        },
        "range": [
          286,
          316
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Banana",
                    "optional": false,
                    "range": [
                      297,
                      303
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 20
                      },
                      "start": {
                        "column": 23,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    297,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 20
                    },
                    "start": {
                      "column": 23,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    306,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 20
                    },
                    "start": {
                      "column": 32,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                297,
                315
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 20
                },
                "start": {
                  "column": 23,
                  "line": 20
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                287,
                288
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              287,
              315
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 20
              },
              "start": {
                "column": 13,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        274,
        431
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          468,
          471
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 35,
            "line": 29
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
            "name": "Banana",
            "optional": false,
            "range": [
              461,
              467
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 29
              },
              "start": {
                "column": 28,
                "line": 29
              }
            }
          },
          "range": [
            461,
            467
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 29
            },
            "start": {
              "column": 28,
              "line": 29
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BigBanana",
        "optional": false,
        "range": [
          443,
          452
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 29
          },
          "start": {
            "column": 10,
            "line": 29
          }
        }
      },
      "range": [
        433,
        471
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          515,
          597
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                521,
                527
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
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
                527,
                595
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  566,
                                  570
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 35
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  571,
                                  572
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 35
                                  }
                                }
                              },
                              "range": [
                                566,
                                572
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 35
                                },
                                "start": {
                                  "column": 12,
                                  "line": 35
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "range": [
                                573,
                                578
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 35
                                },
                                "start": {
                                  "column": 19,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              566,
                              578
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 35
                              },
                              "start": {
                                "column": 12,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            566,
                            579
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        552,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 36
                        },
                        "start": {
                          "column": 20,
                          "line": 34
                        }
                      }
                    },
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          544,
                          548
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 34
                          },
                          "start": {
                            "column": 12,
                            "line": 34
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          549,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 34
                          },
                          "start": {
                            "column": 17,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        544,
                        550
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 34
                        },
                        "start": {
                          "column": 12,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      540,
                      589
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  530,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 37
                  },
                  "start": {
                    "column": 13,
                    "line": 33
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
                  "line": 37
                },
                "start": {
                  "column": 10,
                  "line": 33
                }
              }
            },
            "range": [
              521,
              595
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 42,
            "line": 32
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BigMonkey",
        "optional": false,
        "range": [
          479,
          488
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 32
          },
          "start": {
            "column": 6,
            "line": 32
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Monkey",
        "optional": false,
        "range": [
          497,
          503
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 32
          },
          "start": {
            "column": 24,
            "line": 32
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          503,
          514
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigBanana",
              "optional": false,
              "range": [
                504,
                513
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 32
                },
                "start": {
                  "column": 31,
                  "line": 32
                }
              }
            },
            "range": [
              504,
              513
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 32
              },
              "start": {
                "column": 31,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 32
          },
          "start": {
            "column": 30,
            "line": 32
          }
        }
      },
      "range": [
        473,
        597
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "range": [
          622,
          626
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 42
          },
          "start": {
            "column": 5,
            "line": 42
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 43
                },
                "start": {
                  "column": 6,
                  "line": 43
                }
              },
              "range": [
                637,
                645
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  639,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 43
                  },
                  "start": {
                    "column": 8,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              635,
              646
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                651,
                652
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
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
                  "column": 13,
                  "line": 44
                },
                "start": {
                  "column": 5,
                  "line": 44
                }
              },
              "range": [
                652,
                660
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  654,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 44
                  },
                  "start": {
                    "column": 7,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              651,
              661
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "range": [
          629,
          663
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 12,
            "line": 42
          }
        }
      },
      "range": [
        617,
        663
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 42
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        738,
                        741
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 49
                        },
                        "start": {
                          "column": 8,
                          "line": 49
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
                        742,
                        743
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 49
                        },
                        "start": {
                          "column": 12,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      738,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    738,
                    744
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        753,
                        756
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 50
                        },
                        "start": {
                          "column": 8,
                          "line": 50
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        757,
                        760
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 50
                        },
                        "start": {
                          "column": 12,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      753,
                      761
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    753,
                    762
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        771,
                        774
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 51
                        },
                        "start": {
                          "column": 8,
                          "line": 51
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      771,
                      776
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    771,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                728,
                783
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 13,
                  "line": 48
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                723,
                726
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 48
                },
                "start": {
                  "column": 8,
                  "line": 48
                }
              }
            },
            "range": [
              719,
              783
            ],
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
          }
        ],
        "range": [
          713,
          785
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 48,
            "line": 47
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          674,
          676
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 47
          },
          "start": {
            "column": 9,
            "line": 47
          }
        }
      },
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
                "column": 46,
                "line": 47
              },
              "start": {
                "column": 43,
                "line": 47
              }
            },
            "range": [
              708,
              711
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  710,
                  711
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 47
                  },
                  "start": {
                    "column": 45,
                    "line": 47
                  }
                }
              },
              "range": [
                710,
                711
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 47
                },
                "start": {
                  "column": 45,
                  "line": 47
                }
              }
            }
          },
          "range": [
            705,
            711
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 47
            },
            "start": {
              "column": 40,
              "line": 47
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 47
          },
          "start": {
            "column": 11,
            "line": 47
          }
        },
        "range": [
          676,
          704
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "range": [
                      687,
                      691
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 47
                      },
                      "start": {
                        "column": 22,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    687,
                    691
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 47
                    },
                    "start": {
                      "column": 22,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    694,
                    703
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 47
                    },
                    "start": {
                      "column": 29,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                687,
                703
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 47
                },
                "start": {
                  "column": 22,
                  "line": 47
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                677,
                678
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 47
                },
                "start": {
                  "column": 12,
                  "line": 47
                }
              }
            },
            "out": false,
            "range": [
              677,
              703
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 47
              },
              "start": {
                "column": 12,
                "line": 47
              }
            }
          }
        ]
      },
      "range": [
        665,
        785
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 47
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        872,
                        875
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 57
                        },
                        "start": {
                          "column": 8,
                          "line": 57
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
                        876,
                        877
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 57
                        },
                        "start": {
                          "column": 12,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      872,
                      877
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    872,
                    878
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        887,
                        890
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        891,
                        894
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 58
                        },
                        "start": {
                          "column": 12,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      887,
                      895
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    887,
                    896
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        905,
                        908
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 59
                        },
                        "start": {
                          "column": 8,
                          "line": 59
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      905,
                      910
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    905,
                    911
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                862,
                917
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 13,
                  "line": 56
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                857,
                860
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 56
                },
                "start": {
                  "column": 8,
                  "line": 56
                }
              }
            },
            "range": [
              853,
              917
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          847,
          919
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 60,
            "line": 55
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          796,
          798
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 55
          }
        }
      },
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
                "column": 58,
                "line": 55
              },
              "start": {
                "column": 43,
                "line": 55
              }
            },
            "range": [
              830,
              845
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      832,
                      833
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 55
                      },
                      "start": {
                        "column": 45,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    832,
                    833
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 55
                    },
                    "start": {
                      "column": 45,
                      "line": 55
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    836,
                    845
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 55
                    },
                    "start": {
                      "column": 49,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                832,
                845
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 55
                },
                "start": {
                  "column": 45,
                  "line": 55
                }
              }
            }
          },
          "range": [
            827,
            845
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 55
            },
            "start": {
              "column": 40,
              "line": 55
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 55
          },
          "start": {
            "column": 11,
            "line": 55
          }
        },
        "range": [
          798,
          826
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "range": [
                      809,
                      813
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 55
                      },
                      "start": {
                        "column": 22,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    809,
                    813
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 55
                    },
                    "start": {
                      "column": 22,
                      "line": 55
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    816,
                    825
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 55
                    },
                    "start": {
                      "column": 29,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                809,
                825
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 55
                },
                "start": {
                  "column": 22,
                  "line": 55
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                799,
                800
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 55
                },
                "start": {
                  "column": 12,
                  "line": 55
                }
              }
            },
            "out": false,
            "range": [
              799,
              825
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 55
              },
              "start": {
                "column": 12,
                "line": 55
              }
            }
          }
        ]
      },
      "range": [
        787,
        919
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 55
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        1001,
                        1004
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 65
                        },
                        "start": {
                          "column": 8,
                          "line": 65
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
                        1005,
                        1006
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 65
                        },
                        "start": {
                          "column": 12,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      1001,
                      1006
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1001,
                    1007
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        1016,
                        1019
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 66
                        },
                        "start": {
                          "column": 8,
                          "line": 66
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        1020,
                        1023
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 66
                        },
                        "start": {
                          "column": 12,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1016,
                      1024
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1016,
                    1025
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        1034,
                        1037
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1034,
                      1039
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1034,
                    1040
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                }
              ],
              "range": [
                991,
                1046
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 13,
                  "line": 64
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                986,
                989
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 64
                },
                "start": {
                  "column": 8,
                  "line": 64
                }
              }
            },
            "range": [
              982,
              1046
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          976,
          1048
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 55,
            "line": 63
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          930,
          932
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 63
          },
          "start": {
            "column": 9,
            "line": 63
          }
        }
      },
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
                "column": 53,
                "line": 63
              },
              "start": {
                "column": 43,
                "line": 63
              }
            },
            "range": [
              964,
              974
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      966,
                      967
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 63
                      },
                      "start": {
                        "column": 45,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    966,
                    967
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 63
                    },
                    "start": {
                      "column": 45,
                      "line": 63
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    970,
                    974
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 63
                    },
                    "start": {
                      "column": 49,
                      "line": 63
                    }
                  }
                }
              ],
              "range": [
                966,
                974
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 63
                },
                "start": {
                  "column": 45,
                  "line": 63
                }
              }
            }
          },
          "range": [
            961,
            974
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 63
            },
            "start": {
              "column": 40,
              "line": 63
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 63
          },
          "start": {
            "column": 11,
            "line": 63
          }
        },
        "range": [
          932,
          960
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "range": [
                      943,
                      947
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 63
                      },
                      "start": {
                        "column": 22,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    943,
                    947
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 63
                    },
                    "start": {
                      "column": 22,
                      "line": 63
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    950,
                    959
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 63
                    },
                    "start": {
                      "column": 29,
                      "line": 63
                    }
                  }
                }
              ],
              "range": [
                943,
                959
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 63
                },
                "start": {
                  "column": 22,
                  "line": 63
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                933,
                934
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 63
                },
                "start": {
                  "column": 12,
                  "line": 63
                }
              }
            },
            "out": false,
            "range": [
              933,
              959
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 63
              },
              "start": {
                "column": 12,
                "line": 63
              }
            }
          }
        ]
      },
      "range": [
        921,
        1048
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 63
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          1150,
                          1153
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 73
                          },
                          "start": {
                            "column": 8,
                            "line": 73
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
                          1154,
                          1155
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 73
                          },
                          "start": {
                            "column": 12,
                            "line": 73
                          }
                        }
                      },
                      "range": [
                        1150,
                        1156
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 73
                        },
                        "start": {
                          "column": 8,
                          "line": 73
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
                        1157,
                        1163
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 73
                        },
                        "start": {
                          "column": 15,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1150,
                      1163
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 73
                      },
                      "start": {
                        "column": 8,
                        "line": 73
                      }
                    }
                  },
                  "range": [
                    1150,
                    1164
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                }
              ],
              "range": [
                1140,
                1170
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 74
                },
                "start": {
                  "column": 13,
                  "line": 72
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                1135,
                1138
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 72
                },
                "start": {
                  "column": 8,
                  "line": 72
                }
              }
            },
            "range": [
              1131,
              1170
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          }
        ],
        "range": [
          1125,
          1172
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 75,
            "line": 71
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          1059,
          1061
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 71
          },
          "start": {
            "column": 9,
            "line": 71
          }
        }
      },
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
                "column": 62,
                "line": 71
              },
              "start": {
                "column": 47,
                "line": 71
              }
            },
            "range": [
              1097,
              1112
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1099,
                      1100
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 71
                      },
                      "start": {
                        "column": 49,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1099,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 71
                    },
                    "start": {
                      "column": 49,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1103,
                    1112
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 71
                    },
                    "start": {
                      "column": 53,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                1099,
                1112
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 71
                },
                "start": {
                  "column": 49,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1094,
            1112
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 71
            },
            "start": {
              "column": 44,
              "line": 71
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 71
              },
              "start": {
                "column": 65,
                "line": 71
              }
            },
            "range": [
              1115,
              1123
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1117,
                1123
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 71
                },
                "start": {
                  "column": 67,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1114,
            1123
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 71
            },
            "start": {
              "column": 64,
              "line": 71
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 71
          },
          "start": {
            "column": 11,
            "line": 71
          }
        },
        "range": [
          1061,
          1093
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      1072,
                      1078
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 71
                      },
                      "start": {
                        "column": 22,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1072,
                    1080
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 71
                    },
                    "start": {
                      "column": 22,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1083,
                    1092
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 71
                    },
                    "start": {
                      "column": 33,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                1072,
                1092
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 71
                },
                "start": {
                  "column": 22,
                  "line": 71
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1062,
                1063
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 71
                },
                "start": {
                  "column": 12,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              1062,
              1092
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 71
              },
              "start": {
                "column": 12,
                "line": 71
              }
            }
          }
        ]
      },
      "range": [
        1050,
        1172
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 71
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        1261,
                        1264
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 79
                        },
                        "start": {
                          "column": 8,
                          "line": 79
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        1265,
                        1268
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 79
                        },
                        "start": {
                          "column": 12,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1261,
                      1269
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 79
                      },
                      "start": {
                        "column": 8,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    1261,
                    1270
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 79
                    }
                  }
                }
              ],
              "range": [
                1251,
                1276
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 80
                },
                "start": {
                  "column": 13,
                  "line": 78
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                1246,
                1249
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 78
                },
                "start": {
                  "column": 8,
                  "line": 78
                }
              }
            },
            "range": [
              1242,
              1276
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          }
        ],
        "range": [
          1236,
          1278
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 62,
            "line": 77
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          1183,
          1185
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 77
          },
          "start": {
            "column": 9,
            "line": 77
          }
        }
      },
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
                "column": 52,
                "line": 77
              },
              "start": {
                "column": 37,
                "line": 77
              }
            },
            "range": [
              1211,
              1226
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1213,
                      1214
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 77
                      },
                      "start": {
                        "column": 39,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    1213,
                    1214
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 77
                    },
                    "start": {
                      "column": 39,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    1217,
                    1226
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 77
                    },
                    "start": {
                      "column": 43,
                      "line": 77
                    }
                  }
                }
              ],
              "range": [
                1213,
                1226
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 77
                },
                "start": {
                  "column": 39,
                  "line": 77
                }
              }
            }
          },
          "range": [
            1208,
            1226
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 77
            },
            "start": {
              "column": 34,
              "line": 77
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 77
              },
              "start": {
                "column": 57,
                "line": 77
              }
            },
            "range": [
              1231,
              1234
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  1233,
                  1234
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 77
                  },
                  "start": {
                    "column": 59,
                    "line": 77
                  }
                }
              },
              "range": [
                1233,
                1234
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 77
                },
                "start": {
                  "column": 59,
                  "line": 77
                }
              }
            }
          },
          "range": [
            1228,
            1234
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 77
            },
            "start": {
              "column": 54,
              "line": 77
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 77
          },
          "start": {
            "column": 11,
            "line": 77
          }
        },
        "range": [
          1185,
          1207
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
                1186,
                1187
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 77
                },
                "start": {
                  "column": 12,
                  "line": 77
                }
              }
            },
            "out": false,
            "range": [
              1186,
              1187
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 77
              },
              "start": {
                "column": 12,
                "line": 77
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1205,
                    1206
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 77
                    },
                    "start": {
                      "column": 31,
                      "line": 77
                    }
                  }
                },
                "range": [
                  1205,
                  1206
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 77
                  },
                  "start": {
                    "column": 31,
                    "line": 77
                  }
                }
              },
              "range": [
                1199,
                1206
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 77
                },
                "start": {
                  "column": 25,
                  "line": 77
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                1189,
                1190
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 77
                },
                "start": {
                  "column": 15,
                  "line": 77
                }
              }
            },
            "out": false,
            "range": [
              1189,
              1206
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 77
              },
              "start": {
                "column": 15,
                "line": 77
              }
            }
          }
        ]
      },
      "range": [
        1174,
        1278
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 77
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        1431,
                        1432
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 87
                        },
                        "start": {
                          "column": 8,
                          "line": 87
                        }
                      }
                    },
                    "range": [
                      1427,
                      1434
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 87
                      },
                      "start": {
                        "column": 4,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    1427,
                    1435
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 87
                    },
                    "start": {
                      "column": 4,
                      "line": 87
                    }
                  }
                }
              ],
              "range": [
                1421,
                1439
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 88
                },
                "start": {
                  "column": 29,
                  "line": 86
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1405,
                    1406
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 86
                    },
                    "start": {
                      "column": 13,
                      "line": 86
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1398,
                  1406
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 86
                  },
                  "start": {
                    "column": 6,
                    "line": 86
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1411,
                  1419
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 86
                  },
                  "start": {
                    "column": 19,
                    "line": 86
                  }
                }
              },
              "range": [
                1398,
                1419
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 86
                },
                "start": {
                  "column": 6,
                  "line": 86
                }
              }
            },
            "range": [
              1394,
              1439
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 88
              },
              "start": {
                "column": 2,
                "line": 86
              }
            }
          }
        ],
        "range": [
          1390,
          1441
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 89
          },
          "start": {
            "column": 53,
            "line": 85
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          1346,
          1348
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 85
          },
          "start": {
            "column": 9,
            "line": 85
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 85
              },
              "start": {
                "column": 48,
                "line": 85
              }
            },
            "range": [
              1385,
              1388
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1387,
                  1388
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 85
                  },
                  "start": {
                    "column": 50,
                    "line": 85
                  }
                }
              },
              "range": [
                1387,
                1388
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 85
                },
                "start": {
                  "column": 50,
                  "line": 85
                }
              }
            }
          },
          "range": [
            1384,
            1388
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 85
            },
            "start": {
              "column": 47,
              "line": 85
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 85
          },
          "start": {
            "column": 11,
            "line": 85
          }
        },
        "range": [
          1348,
          1383
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1359,
                    1365
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 85
                    },
                    "start": {
                      "column": 22,
                      "line": 85
                    }
                  }
                },
                {
                  "type": "TSConstructorType",
                  "abstract": false,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 85
                      },
                      "start": {
                        "column": 39,
                        "line": 85
                      }
                    },
                    "range": [
                      1376,
                      1381
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        1379,
                        1381
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 85
                        },
                        "start": {
                          "column": 42,
                          "line": 85
                        }
                      }
                    }
                  },
                  "range": [
                    1369,
                    1381
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 85
                    },
                    "start": {
                      "column": 32,
                      "line": 85
                    }
                  }
                }
              ],
              "range": [
                1359,
                1382
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 85
                },
                "start": {
                  "column": 22,
                  "line": 85
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1349,
                1350
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 85
                },
                "start": {
                  "column": 12,
                  "line": 85
                }
              }
            },
            "out": false,
            "range": [
              1349,
              1382
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 85
              },
              "start": {
                "column": 12,
                "line": 85
              }
            }
          }
        ]
      },
      "range": [
        1337,
        1441
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 90
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
