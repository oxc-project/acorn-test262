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
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 213,
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
        "end": 213,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 45,
            "end": 211,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 52,
              "end": 211,
              "id": {
                "type": "Identifier",
                "start": 58,
                "end": 63,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 64,
                "end": 211,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 74,
                    "end": 167,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 85,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 85,
                      "end": 167,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 86,
                          "end": 95,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 87,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 89,
                              "end": 95
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 97,
                          "end": 106,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 98,
                            "end": 106,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 100,
                              "end": 106
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 108,
                        "end": 167,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 122,
                            "end": 133,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 122,
                              "end": 132,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 122,
                                "end": 128,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 122,
                                  "end": 126
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 127,
                                  "end": 128,
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
                                "start": 131,
                                "end": 132,
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
                            "start": 146,
                            "end": 157,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 146,
                              "end": 156,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 146,
                                "end": 152,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 146,
                                  "end": 150
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 151,
                                  "end": 152,
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
                                "start": 155,
                                "end": 156,
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
                    "start": 176,
                    "end": 186,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
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
                      "start": 177,
                      "end": 185,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 179,
                        "end": 185
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 195,
                    "end": 205,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
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
                      "start": 196,
                      "end": 204,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 198,
                        "end": 204
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
  "end": 101,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 47,
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
        "end": 47,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 45,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 45,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 44,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 34,
                    "name": "Instance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 37,
                    "end": 44,
                    "callee": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
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
      "type": "ClassDeclaration",
      "start": 73,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 100,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 87,
            "end": 98,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 89,
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
              "start": 89,
              "end": 97,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 91,
                "end": 97
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
