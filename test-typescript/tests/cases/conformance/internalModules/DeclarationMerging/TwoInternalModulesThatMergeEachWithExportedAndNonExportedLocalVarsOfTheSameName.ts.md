part1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 270,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 270,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 83,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 83,
              "body": {
                "type": "TSInterfaceBody",
                "start": 38,
                "end": 83,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 48,
                    "end": 58,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 77,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "decorators": [],
                "name": "Point",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 89,
            "end": 221,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 96,
              "end": 221,
              "body": {
                "type": "TSModuleBlock",
                "start": 109,
                "end": 221,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 119,
                    "end": 215,
                    "attributes": [],
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 126,
                      "end": 215,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 165,
                        "end": 215,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 179,
                            "end": 205,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 186,
                              "end": 204,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 188,
                                  "end": 194,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 188,
                                    "end": 189,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "MemberExpression",
                                    "start": 191,
                                    "end": 194,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 191,
                                      "end": 192,
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 193,
                                      "end": 194,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 196,
                                  "end": 202,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 196,
                                    "end": 197,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "MemberExpression",
                                    "start": 199,
                                    "end": 202,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 199,
                                      "end": 200,
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 201,
                                      "end": 202,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 141,
                        "decorators": [],
                        "name": "mirror",
                        "optional": false
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 159,
                          "end": 163,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 160,
                            "end": 163,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 162,
                              "end": 163,
                              "typeName": {
                                "type": "Identifier",
                                "start": 162,
                                "end": 163,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 141,
                        "end": 158,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 142,
                            "end": 157,
                            "const": false,
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 152,
                              "end": 157,
                              "typeName": {
                                "type": "Identifier",
                                "start": 152,
                                "end": 157,
                                "decorators": [],
                                "name": "Point",
                                "optional": false
                              }
                            },
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 143,
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
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 108,
                "decorators": [],
                "name": "Utils",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 226,
            "end": 268,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 233,
              "end": 268,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 237,
                  "end": 267,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 250,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 243,
                      "end": 250,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 245,
                        "end": 250,
                        "typeName": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 250,
                          "decorators": [],
                          "name": "Point",
                          "optional": false
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 253,
                    "end": 267,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 255,
                        "end": 259,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 256,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 258,
                          "end": 259,
                          "raw": "0",
                          "value": 0
                        }
                      },
                      {
                        "type": "Property",
                        "start": 261,
                        "end": 265,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 261,
                          "end": 262,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 264,
                          "end": 265,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  }
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
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
part2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 226,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 226,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 61,
            "end": 88,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 65,
                "end": 87,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 79,
                  "decorators": [],
                  "name": "Origin",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 82,
                  "end": 87,
                  "raw": "\"0,0\"",
                  "value": "0,0"
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 94,
            "end": 224,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 101,
              "end": 224,
              "body": {
                "type": "TSModuleBlock",
                "start": 114,
                "end": 224,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 124,
                    "end": 218,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 131,
                      "end": 218,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 143,
                        "end": 218,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 157,
                            "end": 208,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 157,
                              "end": 168,
                              "decorators": [],
                              "name": "constructor",
                              "optional": false
                            },
                            "kind": "constructor",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 168,
                              "end": 208,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 205,
                                "end": 208,
                                "body": []
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "TSParameterProperty",
                                  "start": 169,
                                  "end": 185,
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "start": 176,
                                    "end": 185,
                                    "decorators": [],
                                    "name": "tl",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 178,
                                      "end": 185,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 180,
                                        "end": 185,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 180,
                                          "end": 185,
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false
                                        }
                                      }
                                    }
                                  },
                                  "readonly": false,
                                  "static": false
                                },
                                {
                                  "type": "TSParameterProperty",
                                  "start": 187,
                                  "end": 203,
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "start": 194,
                                    "end": 203,
                                    "decorators": [],
                                    "name": "br",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 196,
                                      "end": 203,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 198,
                                        "end": 203,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 198,
                                          "end": 203,
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false
                                        }
                                      }
                                    }
                                  },
                                  "readonly": false,
                                  "static": false
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 142,
                        "decorators": [],
                        "name": "Plane",
                        "optional": false
                      },
                      "implements": [],
                      "superClass": null
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
                "start": 108,
                "end": 113,
                "decorators": [],
                "name": "Utils",
                "optional": false
              },
              "kind": "module"
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
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "module"
}
```
part3.ts
```json
{
  "type": "Program",
  "start": 37,
  "end": 238,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 68,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 44,
                "end": 68,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 46,
                    "end": 56,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 49,
                        "end": 55
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 57,
                    "end": 66,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 58,
                      "end": 66,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 60,
                        "end": 66
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 84,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 84,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 77,
                  "end": 84,
                  "left": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 84,
                    "decorators": [],
                    "name": "Point",
                    "optional": false
                  }
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
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 94,
            "end": 102,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 102,
              "decorators": [],
              "name": "Origin",
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
      "start": 104,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 129,
            "arguments": [
              {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "o",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 112,
              "end": 126,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 112,
                "end": 119,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 119,
                  "decorators": [],
                  "name": "Utils",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 126,
                "decorators": [],
                "name": "mirror",
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
      "start": 132,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 167,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 139,
                "end": 167,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 141,
                    "end": 153,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 143,
                      "decorators": [],
                      "name": "tl",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 152,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 145,
                        "end": 152,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 145,
                          "end": 152,
                          "left": {
                            "type": "Identifier",
                            "start": 145,
                            "end": 146,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 152,
                            "decorators": [],
                            "name": "Point",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 154,
                    "end": 165,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 156,
                      "decorators": [],
                      "name": "br",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 165,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 158,
                        "end": 165,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 158,
                          "end": 165,
                          "left": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 159,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 165,
                            "decorators": [],
                            "name": "Point",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 189,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 189,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 176,
                  "end": 189,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 176,
                    "end": 183,
                    "left": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 183,
                      "decorators": [],
                      "name": "Utils",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 189,
                    "decorators": [],
                    "name": "Plane",
                    "optional": false
                  }
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
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 199,
            "end": 235,
            "arguments": [
              {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "o",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 220,
                "end": 234,
                "properties": [
                  {
                    "type": "Property",
                    "start": 222,
                    "end": 226,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 225,
                      "end": 226,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 232,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 231,
                      "end": 232,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 203,
              "end": 216,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 203,
                "end": 210,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 210,
                  "decorators": [],
                  "name": "Utils",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 216,
                "decorators": [],
                "name": "Plane",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
