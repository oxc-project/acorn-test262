__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "raw": "'./foo2'",
          "value": "./foo2"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 211,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 40,
        "end": 211,
        "body": {
          "type": "TSModuleBlock",
          "start": 50,
          "end": 211,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 53,
              "end": 209,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 60,
                "end": 209,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 69,
                  "end": 209,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 73,
                      "end": 88,
                      "accessibility": null,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 77,
                          "end": 87,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 77,
                            "end": 87,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 77,
                              "end": 84,
                              "left": {
                                "type": "Identifier",
                                "start": 77,
                                "end": 81,
                                "decorators": [],
                                "name": "foo2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 82,
                                "end": 84,
                                "decorators": [],
                                "name": "M1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 85,
                              "end": 87,
                              "decorators": [],
                              "name": "C1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 91,
                      "end": 101,
                      "accessibility": null,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 92,
                        "end": 100,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 94,
                          "end": 100
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 104,
                      "end": 206,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 115,
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
                        "start": 115,
                        "end": 206,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 117,
                          "end": 206,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 122,
                              "end": 149,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 122,
                                "end": 148,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 122,
                                  "end": 129,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 122,
                                    "end": 126
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 127,
                                    "end": 129,
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "start": 132,
                                  "end": 148,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 136,
                                    "end": 146,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 136,
                                      "end": 143,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 136,
                                        "end": 140,
                                        "decorators": [],
                                        "name": "foo2",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 141,
                                        "end": 143,
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 144,
                                      "end": 146,
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 153,
                              "end": 168,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 153,
                                "end": 167,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 153,
                                  "end": 162,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 153,
                                    "end": 160,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 153,
                                      "end": 157
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 158,
                                      "end": 160,
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 161,
                                    "end": 162,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 165,
                                  "end": 167,
                                  "raw": "10",
                                  "value": 10
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 178,
                              "end": 193,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 178,
                                "end": 192,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 178,
                                  "end": 187,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 178,
                                    "end": 185,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 178,
                                      "end": 182
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 183,
                                      "end": 185,
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 186,
                                    "end": 187,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 190,
                                  "end": 192,
                                  "raw": "20",
                                  "value": 20
                                }
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
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
                  "start": 66,
                  "end": 68,
                  "decorators": [],
                  "name": "C1",
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
          "start": 47,
          "end": 49,
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 285,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "raw": "'./foo1'",
          "value": "./foo1"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 285,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 40,
        "end": 285,
        "body": {
          "type": "TSModuleBlock",
          "start": 50,
          "end": 285,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 53,
              "end": 283,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 60,
                "end": 283,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 69,
                  "end": 283,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 73,
                      "end": 88,
                      "accessibility": null,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 77,
                          "end": 87,
                          "typeArguments": null,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 77,
                            "end": 87,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 77,
                              "end": 84,
                              "left": {
                                "type": "Identifier",
                                "start": 77,
                                "end": 81,
                                "decorators": [],
                                "name": "foo1",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 82,
                                "end": 84,
                                "decorators": [],
                                "name": "M1",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 85,
                              "end": 87,
                              "decorators": [],
                              "name": "C1",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 91,
                      "end": 100,
                      "accessibility": null,
                      "computed": false,
                      "declare": false,
                      "decorators": [],
                      "definite": false,
                      "key": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "override": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 92,
                        "end": 100,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 94,
                          "end": 100
                        }
                      },
                      "value": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 103,
                      "end": 280,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 114,
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
                        "start": 114,
                        "end": 280,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 116,
                          "end": 280,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 121,
                              "end": 148,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 121,
                                "end": 147,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 121,
                                  "end": 128,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 121,
                                    "end": 125
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 126,
                                    "end": 128,
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "start": 131,
                                  "end": 147,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 135,
                                    "end": 145,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 135,
                                      "end": 142,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 135,
                                        "end": 139,
                                        "decorators": [],
                                        "name": "foo1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 140,
                                        "end": 142,
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 143,
                                      "end": 145,
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 152,
                              "end": 167,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 152,
                                "end": 166,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 152,
                                  "end": 161,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 152,
                                    "end": 159,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 152,
                                      "end": 156
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 157,
                                      "end": 159,
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 160,
                                    "end": 161,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 164,
                                  "end": 166,
                                  "raw": "10",
                                  "value": 10
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 180,
                              "end": 195,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 180,
                                "end": 194,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 180,
                                  "end": 189,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 180,
                                    "end": 187,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 180,
                                      "end": 184
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 185,
                                      "end": 187,
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 188,
                                    "end": 189,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 192,
                                  "end": 194,
                                  "raw": "20",
                                  "value": 20
                                }
                              }
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 206,
                              "end": 228,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 210,
                                  "end": 227,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 210,
                                    "end": 213,
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "start": 216,
                                    "end": 227,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 220,
                                      "end": 225,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 220,
                                        "end": 222,
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 223,
                                        "end": 225,
                                        "decorators": [],
                                        "name": "C1",
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
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 232,
                              "end": 243,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 232,
                                "end": 242,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 232,
                                  "end": 237,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 232,
                                    "end": 235,
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 236,
                                    "end": 237,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 240,
                                  "end": 242,
                                  "raw": "10",
                                  "value": 10
                                }
                              }
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 253,
                              "end": 264,
                              "directive": null,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 253,
                                "end": 263,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 253,
                                  "end": 258,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 253,
                                    "end": 256,
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 257,
                                    "end": 258,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 261,
                                  "end": 263,
                                  "raw": "20",
                                  "value": 20
                                }
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
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
                  "start": 66,
                  "end": 68,
                  "decorators": [],
                  "name": "C1",
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
          "start": 47,
          "end": 49,
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
