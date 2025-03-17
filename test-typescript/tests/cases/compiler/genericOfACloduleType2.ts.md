__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 35,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 15,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 35,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 16,
                  "end": 20,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 17,
                    "end": 20,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 19,
                      "end": 20,
                      "typeName": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
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
                "start": 22,
                "end": 35,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 24,
                    "end": 33,
                    "argument": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 38,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 208,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 53,
            "end": 81,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 60,
              "end": 81,
              "id": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 68,
                "end": 81,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 70,
                    "end": 79,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 73,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 73,
                      "end": 79,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 76,
                        "end": 79,
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
            "start": 86,
            "end": 144,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 93,
              "end": 144,
              "id": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 102,
                "end": 144,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 112,
                    "end": 138,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 119,
                      "end": 138,
                      "id": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 127,
                        "end": 138,
                        "body": []
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
          },
          {
            "type": "VariableDeclaration",
            "start": 150,
            "end": 170,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 154,
                "end": 169,
                "id": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 156,
                  "name": "g1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 159,
                  "end": 169,
                  "callee": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "name": "G",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 164,
                    "end": 167,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 166,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 166,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 175,
            "end": 194,
            "expression": {
              "type": "CallExpression",
              "start": 175,
              "end": 193,
              "callee": {
                "type": "MemberExpression",
                "start": 175,
                "end": 191,
                "object": {
                  "type": "CallExpression",
                  "start": 175,
                  "end": 187,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 175,
                    "end": 181,
                    "object": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 177,
                      "name": "g1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 181,
                      "name": "bar",
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
                      "start": 182,
                      "end": 186,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 191,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 210,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 219,
        "end": 248,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 225,
            "end": 246,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 229,
                "end": 246,
                "id": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 231,
                  "name": "g2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 234,
                  "end": 246,
                  "callee": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "name": "G",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 239,
                    "end": 244,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 240,
                        "end": 243,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 240,
                          "end": 243,
                          "left": {
                            "type": "Identifier",
                            "start": 240,
                            "end": 241,
                            "name": "M",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 243,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
