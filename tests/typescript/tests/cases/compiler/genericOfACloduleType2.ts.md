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
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
      },
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 15
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 19,
                        "end": 20
                      },
                      "typeArguments": null,
                      "start": 19,
                      "end": 20
                    },
                    "start": 17,
                    "end": 20
                  },
                  "start": 16,
                  "end": 20
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 32
                    },
                    "start": 24,
                    "end": 33
                  }
                ],
                "start": 22,
                "end": 35
              },
              "expression": false,
              "start": 15,
              "end": 35
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 12,
            "end": 35
          }
        ],
        "start": 10,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 70
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 76
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 79,
                        "end": 82
                      },
                      "expression": false,
                      "start": 76,
                      "end": 82
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 73,
                    "end": 82
                  }
                ],
                "start": 71,
                "end": 84
              },
              "abstract": false,
              "declare": false,
              "start": 63,
              "end": 84
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 56,
            "end": 84
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
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
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 133,
                        "end": 144
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 125,
                      "end": 144
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 118,
                    "end": 144
                  }
                ],
                "start": 108,
                "end": 150
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 96,
              "end": 150
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 89,
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
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 162
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 172
                        },
                        "typeArguments": null,
                        "start": 171,
                        "end": 172
                      }
                    ],
                    "start": 170,
                    "end": 173
                  },
                  "arguments": [],
                  "start": 165,
                  "end": 175
                },
                "definite": false,
                "start": 160,
                "end": 175
              }
            ],
            "declare": false,
            "start": 156,
            "end": 176
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 183
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 187
                    },
                    "optional": false,
                    "computed": false,
                    "start": 181,
                    "end": 187
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 188,
                      "end": 192
                    }
                  ],
                  "optional": false,
                  "start": 181,
                  "end": 193
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 197
                },
                "optional": false,
                "computed": false,
                "start": 181,
                "end": 197
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 181,
              "end": 199
            },
            "directive": null,
            "start": 181,
            "end": 200
          }
        ],
        "start": 50,
        "end": 214
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 38,
      "end": 214
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 227
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "g2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 240
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 248
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "M",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 249,
                            "end": 250
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 251,
                            "end": 252
                          },
                          "start": 249,
                          "end": 252
                        },
                        "typeArguments": null,
                        "start": 249,
                        "end": 252
                      }
                    ],
                    "start": 248,
                    "end": 253
                  },
                  "arguments": [],
                  "start": 243,
                  "end": 255
                },
                "definite": false,
                "start": 238,
                "end": 255
              }
            ],
            "declare": false,
            "start": 234,
            "end": 255
          }
        ],
        "start": 228,
        "end": 257
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 216,
      "end": 257
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 257
}
```
