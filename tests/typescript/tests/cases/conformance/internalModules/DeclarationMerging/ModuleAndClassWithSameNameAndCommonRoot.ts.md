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
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
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
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 58,
                          "end": 82,
                          "id": {
                            "type": "Identifier",
                            "start": 58,
                            "end": 64,
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 67,
                            "end": 82,
                            "callee": {
                              "type": "Identifier",
                              "start": 71,
                              "end": 76,
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
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
                            ]
                          },
                          "definite": false
                        }
                      ],
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
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 58,
                "end": 63,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 64,
                "end": 211,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 74,
                    "end": 167,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 85,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 85,
                      "end": 167,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 86,
                          "end": 95,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 87,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 89,
                              "end": 95
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 97,
                          "end": 106,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 98,
                            "end": 106,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 100,
                              "end": 106
                            }
                          }
                        }
                      ],
                      "returnType": null,
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
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 132,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 156,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
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
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 176,
                    "end": 186,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "start": 195,
                    "end": 205,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
  "end": 100,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 44,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 34,
                    "decorators": [],
                    "name": "Instance",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 37,
                    "end": 44,
                    "callee": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "definite": false
                }
              ],
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
    {
      "type": "ClassDeclaration",
      "start": 73,
      "end": 100,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 100,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 87,
            "end": 98,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 89,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
