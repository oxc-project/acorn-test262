__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 546,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 463,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 463,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 17,
            "end": 67,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 26,
              "end": 67,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 36,
                  "end": 46,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 39,
                      "end": 45
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 55,
                  "end": 61,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 58,
                      "end": 60,
                      "typeName": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 60,
                        "decorators": [],
                        "name": "C1",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 25,
              "decorators": [],
              "name": "C1",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 74,
            "end": 122,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 83,
              "end": 122,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 93,
                  "end": 116,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "decorators": [],
                    "name": "test",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 97,
                    "end": 116,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 100,
                      "end": 116,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 102,
                          "end": 114,
                          "argument": {
                            "type": "Literal",
                            "start": 109,
                            "end": 113,
                            "raw": "true",
                            "value": true
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 82,
              "decorators": [],
              "name": "C2",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 129,
            "end": 225,
            "body": {
              "type": "TSInterfaceBody",
              "start": 142,
              "end": 225,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 152,
                  "end": 183,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 153,
                      "end": 162,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 154,
                        "end": 162,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 156,
                          "end": 162
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 164,
                      "end": 173,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 165,
                        "end": 173,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 167,
                          "end": 173
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 174,
                    "end": 182,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 176,
                      "end": 182
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 192,
                  "end": 219,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 193,
                      "end": 202,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 194,
                        "end": 202,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 196,
                          "end": 202
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 204,
                      "end": 213,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 205,
                        "end": 213,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 207,
                          "end": 213
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 214,
                    "end": 218,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 216,
                      "end": 218,
                      "typeName": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 218,
                        "decorators": [],
                        "name": "I1",
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
              "start": 139,
              "end": 141,
              "decorators": [],
              "name": "I1",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 232,
            "end": 290,
            "body": {
              "type": "TSInterfaceBody",
              "start": 245,
              "end": 290,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 255,
                  "end": 265,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 256,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 256,
                    "end": 264,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 258,
                      "end": 264
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 274,
                  "end": 284,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 275,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 283,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 277,
                      "end": 283
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 242,
              "end": 244,
              "decorators": [],
              "name": "I2",
              "optional": false
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 378,
            "end": 395,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 385,
              "end": 395,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 389,
                  "end": 394,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 394,
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 390,
                      "end": 394,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 392,
                        "end": 394,
                        "typeName": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 394,
                          "decorators": [],
                          "name": "C1",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 400,
            "end": 417,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 407,
              "end": 417,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 411,
                  "end": 416,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 416,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 412,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 414,
                        "end": 416,
                        "typeName": {
                          "type": "Identifier",
                          "start": 414,
                          "end": 416,
                          "decorators": [],
                          "name": "I1",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 422,
            "end": 439,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 429,
              "end": 439,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 433,
                  "end": 438,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 438,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 434,
                      "end": 438,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 436,
                        "end": 438,
                        "typeName": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 438,
                          "decorators": [],
                          "name": "C2",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 444,
            "end": 461,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 451,
              "end": 461,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 455,
                  "end": 460,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 460,
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 456,
                      "end": 460,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 458,
                        "end": 460,
                        "typeName": {
                          "type": "Identifier",
                          "start": 458,
                          "end": 460,
                          "decorators": [],
                          "name": "I2",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 479,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 471,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 474,
            "end": 479,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 474,
              "end": 477,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "decorators": [],
              "name": "g",
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
