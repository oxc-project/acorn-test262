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
          "start": 10,
          "end": 11
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "start": 10,
        "end": 13
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
                "start": 37,
                "end": 42
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
                            "start": 64,
                            "end": 70
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Point",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 77,
                              "end": 82
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 83,
                                "end": 84
                              },
                              {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 86,
                                "end": 87
                              }
                            ],
                            "start": 73,
                            "end": 88
                          },
                          "definite": false,
                          "start": 64,
                          "end": 88
                        }
                      ],
                      "declare": false,
                      "start": 60,
                      "end": 89
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 53,
                    "end": 89
                  }
                ],
                "start": 43,
                "end": 95
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 27,
              "end": 95
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 95
          }
        ],
        "start": 14,
        "end": 97
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 97
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 98
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
          "start": 10,
          "end": 11
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "start": 10,
        "end": 13
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
                "start": 61,
                "end": 66
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
                      "start": 77,
                      "end": 88
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
                              "start": 92,
                              "end": 98
                            },
                            "start": 90,
                            "end": 98
                          },
                          "start": 89,
                          "end": 98
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
                              "start": 103,
                              "end": 109
                            },
                            "start": 101,
                            "end": 109
                          },
                          "start": 100,
                          "end": 109
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
                                  "start": 125,
                                  "end": 129
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 130,
                                  "end": 131
                                },
                                "optional": false,
                                "computed": false,
                                "start": 125,
                                "end": 131
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 134,
                                "end": 135
                              },
                              "start": 125,
                              "end": 135
                            },
                            "directive": null,
                            "start": 125,
                            "end": 136
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
                                  "start": 149,
                                  "end": 153
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 154,
                                  "end": 155
                                },
                                "optional": false,
                                "computed": false,
                                "start": 149,
                                "end": 155
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 158,
                                "end": 159
                              },
                              "start": 149,
                              "end": 159
                            },
                            "directive": null,
                            "start": 149,
                            "end": 160
                          }
                        ],
                        "start": 111,
                        "end": 170
                      },
                      "expression": false,
                      "start": 88,
                      "end": 170
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 77,
                    "end": 170
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
                      "start": 179,
                      "end": 180
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
                      },
                      "start": 180,
                      "end": 188
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
                    "start": 179,
                    "end": 189
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
                      "start": 198,
                      "end": 199
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 201,
                        "end": 207
                      },
                      "start": 199,
                      "end": 207
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
                    "start": 198,
                    "end": 208
                  }
                ],
                "start": 67,
                "end": 214
              },
              "abstract": false,
              "declare": false,
              "start": 55,
              "end": 214
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 48,
            "end": 214
          }
        ],
        "start": 14,
        "end": 216
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 216
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 217
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
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                    "start": 29,
                    "end": 37
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 44,
                      "end": 45
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 40,
                    "end": 47
                  },
                  "definite": false,
                  "start": 29,
                  "end": 47
                }
              ],
              "declare": false,
              "start": 25,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 48
          }
        ],
        "start": 12,
        "end": 50
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 83
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
              "start": 90,
              "end": 92
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              },
              "start": 92,
              "end": 100
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
            "start": 90,
            "end": 101
          }
        ],
        "start": 84,
        "end": 103
      },
      "abstract": false,
      "declare": false,
      "start": 76,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
