__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 224,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 223,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 223,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
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
                                    "optional": false,
                                    "typeAnnotation": null
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
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 193,
                                      "end": 194,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                    "optional": false,
                                    "typeAnnotation": null
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
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 201,
                                      "end": 202,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
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
                        "optional": false,
                        "typeAnnotation": null
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 162,
                                "end": 163,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 152,
                                "end": 157,
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 143,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 196,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 195,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 195,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 57,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 57,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 56,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 39,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 32,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 34,
                        "end": 39,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 39,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 42,
                    "end": 56,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 44,
                        "end": 48,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 45,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 47,
                          "end": 48,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 50,
                        "end": 54,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 51,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 53,
                          "end": 54,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 63,
            "end": 193,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 70,
              "end": 193,
              "body": {
                "type": "TSModuleBlock",
                "start": 83,
                "end": 193,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 93,
                    "end": 187,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 100,
                      "end": 187,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 112,
                        "end": 187,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 126,
                            "end": 177,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 137,
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "constructor",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 137,
                              "end": 177,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 174,
                                "end": 177,
                                "body": []
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "TSParameterProperty",
                                  "start": 138,
                                  "end": 154,
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "start": 145,
                                    "end": 154,
                                    "decorators": [],
                                    "name": "tl",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 147,
                                      "end": 154,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 149,
                                        "end": 154,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 149,
                                          "end": 154,
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  },
                                  "readonly": false,
                                  "static": false
                                },
                                {
                                  "type": "TSParameterProperty",
                                  "start": 156,
                                  "end": 172,
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "start": 163,
                                    "end": 172,
                                    "decorators": [],
                                    "name": "br",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 165,
                                      "end": 172,
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 167,
                                        "end": 172,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 167,
                                          "end": 172,
                                          "decorators": [],
                                          "name": "Point",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  },
                                  "readonly": false,
                                  "static": false
                                }
                              ],
                              "returnType": null,
                              "typeParameters": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 111,
                        "decorators": [],
                        "name": "Plane",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "implements": [],
                      "superClass": null,
                      "superTypeArguments": null,
                      "typeParameters": null
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
                "start": 77,
                "end": 82,
                "decorators": [],
                "name": "Utils",
                "optional": false,
                "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 237,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
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
                "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 84,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 102,
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 119,
                  "decorators": [],
                  "name": "Utils",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 126,
                "decorators": [],
                "name": "mirror",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 143,
                      "decorators": [],
                      "name": "tl",
                      "optional": false,
                      "typeAnnotation": null
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
                        "typeArguments": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 152,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 154,
                    "end": 165,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 156,
                      "decorators": [],
                      "name": "br",
                      "optional": false,
                      "typeAnnotation": null
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
                        "typeArguments": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 165,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null
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
                "typeArguments": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 183,
                      "decorators": [],
                      "name": "Utils",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 189,
                    "decorators": [],
                    "name": "Plane",
                    "optional": false,
                    "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
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
                      "optional": false,
                      "typeAnnotation": null
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
                      "value": 1,
                      "regex": null,
                      "bigint": null
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
                      "optional": false,
                      "typeAnnotation": null
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
                      "value": 1,
                      "regex": null,
                      "bigint": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 210,
                  "decorators": [],
                  "name": "Utils",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 216,
                "decorators": [],
                "name": "Plane",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
