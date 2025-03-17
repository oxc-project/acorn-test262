__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 185,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 10,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 8,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "name": "Y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 185,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 183,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 24,
              "end": 183,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 35,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 36,
                "end": 183,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 46,
                    "end": 139,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 57,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 57,
                      "end": 139,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 58,
                          "end": 67,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 59,
                            "end": 67,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 61,
                              "end": 67
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 69,
                          "end": 78,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 70,
                            "end": 78,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 72,
                              "end": 78
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 80,
                        "end": 139,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 94,
                            "end": 105,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 94,
                              "end": 104,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 94,
                                "end": 100,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 94,
                                  "end": 98
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 99,
                                  "end": 100,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 104,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 118,
                            "end": 129,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 118,
                              "end": 128,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 118,
                                "end": 124,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 118,
                                  "end": 122
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 123,
                                  "end": 124,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 127,
                                "end": 128,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 148,
                    "end": 158,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 151,
                        "end": 157
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 167,
                    "end": 177,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 168,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 170,
                        "end": 176
                      }
                    },
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
  "end": 92,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 91,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 10,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 8,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "name": "Y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 91,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 89,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 24,
              "end": 89,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 36,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 37,
                "end": 89,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 47,
                    "end": 83,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 54,
                      "end": 83,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 58,
                          "end": 82,
                          "id": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 64,
                            "name": "Origin",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 67,
                            "end": 82,
                            "callee": {
                              "type": "Identifier",
                              "start": 71,
                              "end": 76,
                              "name": "Point",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 77,
                                "end": 78,
                                "value": 0,
                                "raw": "0"
                              },
                              {
                                "type": "Literal",
                                "start": 80,
                                "end": 81,
                                "value": 0,
                                "raw": "0"
                              }
                            ],
                            "typeArguments": null
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
  "start": 36,
  "end": 140,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 42,
            "name": "cl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 45,
            "end": 63,
            "callee": {
              "type": "MemberExpression",
              "start": 49,
              "end": 58,
              "object": {
                "type": "MemberExpression",
                "start": 49,
                "end": 52,
                "object": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 58,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 59,
                "end": 60,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "value": 1,
                "raw": "1"
              }
            ],
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
      "start": 65,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 71,
            "name": "cl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 74,
            "end": 90,
            "object": {
              "type": "MemberExpression",
              "start": 74,
              "end": 83,
              "object": {
                "type": "MemberExpression",
                "start": 74,
                "end": 77,
                "object": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 83,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 90,
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
  "end": 174,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 27,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              }
            },
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
    {
      "type": "TSModuleDeclaration",
      "start": 29,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 38,
        "end": 76,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 74,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 51,
              "end": 74,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 55,
                  "end": 73,
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 63,
                    "name": "Instance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 66,
                    "end": 73,
                    "callee": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
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
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 122,
            "end": 132,
            "object": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 124,
              "end": 132,
              "name": "Instance",
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
      "start": 134,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 142,
            "end": 149,
            "callee": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 151,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 172,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 172,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 158,
                "end": 172,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 160,
                    "end": 170,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 162,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 162,
                      "end": 170,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 164,
                        "end": 170
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
