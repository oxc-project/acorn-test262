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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "value": "./foo2",
          "raw": "'./foo2'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 211,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 40,
        "end": 211,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 49,
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 50,
          "end": 211,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 53,
              "end": 209,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 60,
                "end": 209,
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
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 69,
                  "end": 209,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 73,
                      "end": 88,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 77,
                          "end": 87,
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
                          },
                          "typeArguments": null
                        }
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 91,
                      "end": 101,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 104,
                      "end": 206,
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
                      "value": {
                        "type": "FunctionExpression",
                        "start": 115,
                        "end": 206,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 117,
                          "end": 206,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 122,
                              "end": 149,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 122,
                                "end": 148,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 122,
                                  "end": 129,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 122,
                                    "end": 126
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 127,
                                    "end": 129,
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "start": 132,
                                  "end": 148,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 136,
                                    "end": 146,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 136,
                                      "end": 143,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 136,
                                        "end": 140,
                                        "decorators": [],
                                        "name": "foo2",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 141,
                                        "end": 143,
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 144,
                                      "end": 146,
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 153,
                              "end": 168,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 153,
                                "end": 167,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 153,
                                  "end": 162,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 153,
                                    "end": 160,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 153,
                                      "end": 157
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 158,
                                      "end": 160,
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 161,
                                    "end": 162,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 165,
                                  "end": 167,
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 178,
                              "end": 193,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 178,
                                "end": 192,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 178,
                                  "end": 187,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 178,
                                    "end": 185,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 178,
                                      "end": 182
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 183,
                                      "end": 185,
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 186,
                                    "end": 187,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 190,
                                  "end": 192,
                                  "value": 20,
                                  "raw": "20"
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "value": "./foo1",
          "raw": "'./foo1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 285,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 40,
        "end": 285,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 49,
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 50,
          "end": 285,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 53,
              "end": 283,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 60,
                "end": 283,
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
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 69,
                  "end": 283,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 73,
                      "end": 88,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 75,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 77,
                          "end": 87,
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
                          },
                          "typeArguments": null
                        }
                      },
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    },
                    {
                      "type": "PropertyDefinition",
                      "start": 91,
                      "end": 100,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                      "value": null,
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    },
                    {
                      "type": "MethodDefinition",
                      "start": 103,
                      "end": 280,
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
                      "value": {
                        "type": "FunctionExpression",
                        "start": 114,
                        "end": 280,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 116,
                          "end": 280,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 121,
                              "end": 148,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 121,
                                "end": 147,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 121,
                                  "end": 128,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 121,
                                    "end": 125
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 126,
                                    "end": 128,
                                    "decorators": [],
                                    "name": "m1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "NewExpression",
                                  "start": 131,
                                  "end": 147,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 135,
                                    "end": 145,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 135,
                                      "end": 142,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 135,
                                        "end": 139,
                                        "decorators": [],
                                        "name": "foo1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 140,
                                        "end": 142,
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 143,
                                      "end": 145,
                                      "decorators": [],
                                      "name": "C1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": []
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 152,
                              "end": 167,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 152,
                                "end": 166,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 152,
                                  "end": 161,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 152,
                                    "end": 159,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 152,
                                      "end": 156
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 157,
                                      "end": 159,
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 160,
                                    "end": 161,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 164,
                                  "end": 166,
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 180,
                              "end": 195,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 180,
                                "end": 194,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 180,
                                  "end": 189,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 180,
                                    "end": 187,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 180,
                                      "end": 184
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 185,
                                      "end": 187,
                                      "decorators": [],
                                      "name": "m1",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 188,
                                    "end": 189,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 192,
                                  "end": 194,
                                  "value": 20,
                                  "raw": "20"
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "VariableDeclaration",
                              "start": 206,
                              "end": 228,
                              "kind": "var",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 210,
                                  "end": 227,
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
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 220,
                                      "end": 225,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 220,
                                        "end": 222,
                                        "decorators": [],
                                        "name": "M1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 223,
                                        "end": 225,
                                        "decorators": [],
                                        "name": "C1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": []
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 232,
                              "end": 243,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 232,
                                "end": 242,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 232,
                                  "end": 237,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 232,
                                    "end": 235,
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 236,
                                    "end": 237,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 240,
                                  "end": 242,
                                  "value": 10,
                                  "raw": "10"
                                }
                              },
                              "directive": null
                            },
                            {
                              "type": "ExpressionStatement",
                              "start": 253,
                              "end": 264,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 253,
                                "end": 263,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 253,
                                  "end": 258,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 253,
                                    "end": 256,
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 257,
                                    "end": 258,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 261,
                                  "end": 263,
                                  "value": 20,
                                  "raw": "20"
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
