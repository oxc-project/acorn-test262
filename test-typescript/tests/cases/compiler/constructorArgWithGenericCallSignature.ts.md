__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 188,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 76,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 25,
              "end": 76,
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 41,
                "name": "MyFunc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 42,
                "end": 76,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 52,
                    "end": 70,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 52,
                      "end": 55,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 53,
                          "end": 54,
                          "name": {
                            "type": "Identifier",
                            "start": 53,
                            "end": 54,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 56,
                        "end": 65,
                        "name": "value1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 62,
                          "end": 65,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 64,
                            "end": 65,
                            "typeName": {
                              "type": "Identifier",
                              "start": 64,
                              "end": 65,
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 68,
                        "end": 69,
                        "typeName": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 69,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
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
            "start": 81,
            "end": 147,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 88,
              "end": 147,
              "id": {
                "type": "Identifier",
                "start": 94,
                "end": 101,
                "name": "MyClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 102,
                "end": 147,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 112,
                    "end": 141,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 123,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 123,
                      "end": 141,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 124,
                          "end": 136,
                          "name": "func",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 128,
                            "end": 136,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 130,
                              "end": 136,
                              "typeName": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 136,
                                "name": "MyFunc",
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
                        "start": 138,
                        "end": 141,
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 151,
            "end": 186,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 158,
              "end": 186,
              "id": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "name": "F",
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
                  "start": 169,
                  "end": 181,
                  "name": "func",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 173,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 181,
                        "name": "MyFunc",
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
                "start": 183,
                "end": 186,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
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
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 210,
            "name": "func",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 210,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 199,
                  "end": 210,
                  "left": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 203,
                    "name": "Test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 210,
                    "name": "MyFunc",
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
      "type": "ExpressionStatement",
      "start": 212,
      "end": 225,
      "expression": {
        "type": "CallExpression",
        "start": 212,
        "end": 224,
        "callee": {
          "type": "MemberExpression",
          "start": 212,
          "end": 218,
          "object": {
            "type": "Identifier",
            "start": 212,
            "end": 216,
            "name": "Test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "name": "F",
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
            "start": 219,
            "end": 223,
            "name": "func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 265,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 240,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 243,
            "end": 265,
            "callee": {
              "type": "MemberExpression",
              "start": 247,
              "end": 259,
              "object": {
                "type": "Identifier",
                "start": 247,
                "end": 251,
                "name": "Test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 259,
                "name": "MyClass",
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
                "start": 260,
                "end": 264,
                "name": "func",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
  "sourceType": "script",
  "hashbang": null
}
```
