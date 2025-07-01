__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 7,
          "end": 8
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 9,
          "end": 10
        },
        "start": 7,
        "end": 10
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 35
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 57
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 61,
                              "end": 67
                            },
                            "start": 59,
                            "end": 67
                          },
                          "start": 58,
                          "end": 67
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 72,
                              "end": 78
                            },
                            "start": 70,
                            "end": 78
                          },
                          "start": 69,
                          "end": 78
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 94,
                                  "end": 98
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 99,
                                  "end": 100
                                },
                                "optional": false,
                                "computed": false,
                                "start": 94,
                                "end": 100
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 103,
                                "end": 104
                              },
                              "start": 94,
                              "end": 104
                            },
                            "directive": null,
                            "start": 94,
                            "end": 105
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 118,
                                  "end": 122
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 123,
                                  "end": 124
                                },
                                "optional": false,
                                "computed": false,
                                "start": 118,
                                "end": 124
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 127,
                                "end": 128
                              },
                              "start": 118,
                              "end": 128
                            },
                            "directive": null,
                            "start": 118,
                            "end": 129
                          }
                        ],
                        "start": 80,
                        "end": 139
                      },
                      "expression": false,
                      "start": 57,
                      "end": 139
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 46,
                    "end": 139
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 149
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 151,
                        "end": 157
                      },
                      "start": 149,
                      "end": 157
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 148,
                    "end": 158
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 168
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 170,
                        "end": 176
                      },
                      "start": 168,
                      "end": 176
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 167,
                    "end": 177
                  }
                ],
                "start": 36,
                "end": 183
              },
              "abstract": false,
              "declare": false,
              "start": 24,
              "end": 183
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17,
            "end": 183
          }
        ],
        "start": 11,
        "end": 185
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 185
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 186
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 7,
          "end": 8
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 9,
          "end": 10
        },
        "start": 7,
        "end": 10
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 36
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 58,
                            "end": 64
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 71,
                              "end": 76
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 77,
                                "end": 78
                              },
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 80,
                                "end": 81
                              }
                            ],
                            "start": 67,
                            "end": 82
                          },
                          "definite": false,
                          "start": 58,
                          "end": 82
                        }
                      ],
                      "declare": false,
                      "start": 54,
                      "end": 83
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 47,
                    "end": 83
                  }
                ],
                "start": 37,
                "end": 89
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 24,
              "end": 89
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17,
            "end": 89
          }
        ],
        "start": 11,
        "end": 91
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 92
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 42
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 50
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 52
                },
                "optional": false,
                "computed": false,
                "start": 49,
                "end": 52
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 58
              },
              "optional": false,
              "computed": false,
              "start": 49,
              "end": 58
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 59,
                "end": 60
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 61,
                "end": 62
              }
            ],
            "start": 45,
            "end": 63
          },
          "definite": false,
          "start": 40,
          "end": 63
        }
      ],
      "declare": false,
      "start": 36,
      "end": 64
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cl",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 71
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 77
                },
                "optional": false,
                "computed": false,
                "start": 74,
                "end": 77
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 83
              },
              "optional": false,
              "computed": false,
              "start": 74,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 90
            },
            "optional": false,
            "computed": false,
            "start": 74,
            "end": 90
          },
          "definite": false,
          "start": 69,
          "end": 90
        }
      ],
      "declare": false,
      "start": 65,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 36,
  "end": 140
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 16
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 25
          }
        ],
        "start": 8,
        "end": 27
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 37
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Instance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 63
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 71
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 66,
                    "end": 73
                  },
                  "definite": false,
                  "start": 55,
                  "end": 73
                }
              ],
              "declare": false,
              "start": 51,
              "end": 74
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 44,
            "end": 74
          }
        ],
        "start": 38,
        "end": 76
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 29,
      "end": 76
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Instance",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 132
            },
            "optional": false,
            "computed": false,
            "start": 122,
            "end": 132
          },
          "definite": false,
          "start": 118,
          "end": 132
        }
      ],
      "declare": false,
      "start": 114,
      "end": 133
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 139
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "typeArguments": null,
            "arguments": [],
            "start": 142,
            "end": 149
          },
          "definite": false,
          "start": 138,
          "end": 149
        }
      ],
      "declare": false,
      "start": 134,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 162
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 164,
                        "end": 170
                      },
                      "start": 162,
                      "end": 170
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 160,
                    "end": 170
                  }
                ],
                "start": 158,
                "end": 172
              },
              "start": 156,
              "end": 172
            },
            "start": 155,
            "end": 172
          },
          "init": null,
          "definite": false,
          "start": 155,
          "end": 172
        }
      ],
      "declare": false,
      "start": 151,
      "end": 173
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 173
}
```
