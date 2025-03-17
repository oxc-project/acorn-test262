__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 270,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 83,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 83,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 77,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 89,
            "end": 221,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 96,
              "end": 221,
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 108,
                "name": "Utils",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 109,
                "end": 221,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 119,
                    "end": 215,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 126,
                      "end": 215,
                      "id": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 141,
                        "name": "mirror",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 159,
                          "end": 163,
                          "name": "p",
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 188,
                                    "end": 189,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "start": 191,
                                    "end": 194,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 191,
                                      "end": 192,
                                      "name": "p",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 193,
                                      "end": 194,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 196,
                                  "end": 202,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 196,
                                    "end": 197,
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "start": 199,
                                    "end": 202,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 199,
                                      "end": 200,
                                      "name": "p",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 201,
                                      "end": 202,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 141,
                        "end": 158,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 142,
                            "end": 157,
                            "name": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 143,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "start": 152,
                              "end": 157,
                              "typeName": {
                                "type": "Identifier",
                                "start": 152,
                                "end": 157,
                                "name": "Point",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "returnType": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 226,
            "end": 268,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 233,
              "end": 268,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 237,
                  "end": 267,
                  "id": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 250,
                    "name": "Origin",
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
                          "name": "Point",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 256,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 258,
                          "end": 259,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 261,
                        "end": 265,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 261,
                          "end": 262,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 264,
                          "end": 265,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
  "end": 227,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 79,
                  "name": "Origin",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 82,
                  "end": 87,
                  "value": "0,0",
                  "raw": "\"0,0\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 94,
            "end": 224,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 101,
              "end": 224,
              "id": {
                "type": "Identifier",
                "start": 108,
                "end": 113,
                "name": "Utils",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 114,
                "end": 224,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 124,
                    "end": 218,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 131,
                      "end": 218,
                      "id": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 142,
                        "name": "Plane",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 143,
                        "end": 218,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 157,
                            "end": 208,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 157,
                              "end": 168,
                              "name": "constructor",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "constructor",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 168,
                              "end": 208,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
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
                                    "name": "tl",
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
                                          "name": "Point",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
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
                                    "name": "br",
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
                                          "name": "Point",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "readonly": false,
                                  "static": false
                                }
                              ],
                              "body": {
                                "type": "BlockStatement",
                                "start": 205,
                                "end": 208,
                                "body": []
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
                            },
                            "decorators": [],
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          }
                        ]
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 68,
            "name": "o",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 49,
                        "end": 55
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 57,
                    "end": 66,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 58,
                      "end": 66,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 60,
                        "end": 66
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 84,
            "name": "o",
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
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 84,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 94,
            "end": 102,
            "object": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 102,
              "name": "Origin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 112,
            "end": 129,
            "callee": {
              "type": "MemberExpression",
              "start": 112,
              "end": 126,
              "object": {
                "type": "MemberExpression",
                "start": 112,
                "end": 119,
                "object": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 119,
                  "name": "Utils",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 126,
                "name": "mirror",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 167,
            "name": "p",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 143,
                      "name": "tl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 147,
                            "end": 152,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 154,
                    "end": 165,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 156,
                      "name": "br",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 165,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 189,
            "name": "p",
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 183,
                      "name": "Utils",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 189,
                    "name": "Plane",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 199,
            "end": 235,
            "callee": {
              "type": "MemberExpression",
              "start": 203,
              "end": 216,
              "object": {
                "type": "MemberExpression",
                "start": 203,
                "end": 210,
                "object": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 210,
                  "name": "Utils",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 216,
                "name": "Plane",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 225,
                      "end": 226,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 232,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 231,
                      "end": 232,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
