__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 651,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 4,
      "end": 258,
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 258,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 32,
            "end": 187,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 39,
              "end": 187,
              "body": {
                "type": "TSInterfaceBody",
                "start": 63,
                "end": 187,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 77,
                    "end": 83,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 79,
                      "end": 82,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 81,
                        "end": 82,
                        "typeName": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 82,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 96,
                    "end": 112,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 97,
                        "end": 105,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 102,
                          "end": 105,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 104,
                            "end": 105,
                            "typeName": {
                              "type": "Identifier",
                              "start": 104,
                              "end": 105,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 106,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 108,
                        "end": 111
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 125,
                    "end": 135,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
                      "decorators": [],
                      "name": "N",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 126,
                      "end": 134,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 128,
                        "end": 134
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 159,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "g",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 158,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 151,
                        "end": 158
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 172,
                    "end": 177,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 173,
                      "decorators": [],
                      "name": "r",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 173,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 175,
                        "end": 176,
                        "typeName": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 176,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 59,
                "decorators": [],
                "name": "Observable",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 59,
                "end": 62,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 60,
                    "end": 61,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 196,
            "end": 251,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 203,
              "end": 251,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 212,
                "end": 222,
                "decorators": [],
                "name": "observable",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 234,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 231,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 233,
                      "end": 234,
                      "typeName": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 234,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 235,
                "end": 250,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 237,
                  "end": 250,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 247,
                    "end": 250,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 248,
                        "end": 249,
                        "typeName": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 249,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 247,
                    "decorators": [],
                    "name": "Observable",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 222,
                "end": 225,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 223,
                    "end": 224,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 21,
        "decorators": [],
        "name": "ko",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 347,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 272,
            "end": 347,
            "properties": [
              {
                "type": "Property",
                "start": 282,
                "end": 308,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 286,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 288,
                  "end": 308,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 302,
                      "end": 307,
                      "raw": "\"Bob\"",
                      "value": "Bob"
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 288,
                    "end": 301,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 290,
                      "decorators": [],
                      "name": "ko",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 301,
                      "decorators": [],
                      "name": "observable",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 318,
                "end": 340,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 321,
                  "decorators": [],
                  "name": "age",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "start": 323,
                  "end": 340,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 337,
                      "end": 339,
                      "raw": "37",
                      "value": 37
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 323,
                    "end": 336,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 323,
                      "end": 325,
                      "decorators": [],
                      "name": "ko",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 336,
                      "decorators": [],
                      "name": "observable",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 361,
            "decorators": [],
            "name": "x_v",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 364,
            "end": 379,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 364,
              "end": 372,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 364,
                "end": 370,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 370,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                }
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 373,
              "end": 379,
              "decorators": [],
              "name": "length",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 408,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 427,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 417,
            "decorators": [],
            "name": "age_v",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 420,
            "end": 427,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 420,
              "end": 425,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 420,
                "end": 421,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 422,
                "end": 425,
                "decorators": [],
                "name": "age",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 485,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 466,
            "decorators": [],
            "name": "name_v",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 469,
            "end": 485,
            "arguments": [
              {
                "type": "Literal",
                "start": 476,
                "end": 484,
                "raw": "\"Robert\"",
                "value": "Robert"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 469,
              "end": 475,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 469,
                "end": 470,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 471,
                "end": 475,
                "decorators": [],
                "name": "name",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 511,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 530,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 519,
            "decorators": [],
            "name": "zz_v",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 522,
            "end": 530,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 522,
              "end": 528,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 522,
                "end": 523,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 524,
                "end": 528,
                "decorators": [],
                "name": "name",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
              "decorators": [],
              "name": "N",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 559,
      "end": 579,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 578,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 567,
            "decorators": [],
            "name": "yy_v",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 570,
            "end": 578,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 570,
              "end": 576,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 570,
                "end": 571,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 572,
                "end": 576,
                "decorators": [],
                "name": "name",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 577,
              "end": 578,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 608,
      "end": 628,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 627,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 616,
            "decorators": [],
            "name": "rr_v",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 619,
            "end": 627,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 619,
              "end": 625,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 619,
                "end": 620,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 621,
                "end": 625,
                "decorators": [],
                "name": "name",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 626,
              "end": 627,
              "decorators": [],
              "name": "r",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
