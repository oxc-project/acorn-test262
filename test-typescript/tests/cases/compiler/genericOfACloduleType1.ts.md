__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 281,
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
      "end": 197,
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
        "end": 197,
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
            "start": 151,
            "end": 171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 170,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 157,
                  "name": "g1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 160,
                  "end": 170,
                  "callee": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 165,
                    "name": "G",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 165,
                    "end": 168,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 166,
                        "end": 167,
                        "typeName": {
                          "type": "Identifier",
                          "start": 166,
                          "end": 167,
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
            "start": 176,
            "end": 195,
            "expression": {
              "type": "CallExpression",
              "start": 176,
              "end": 194,
              "callee": {
                "type": "MemberExpression",
                "start": 176,
                "end": 192,
                "object": {
                  "type": "CallExpression",
                  "start": 176,
                  "end": 188,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 176,
                    "end": 182,
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 178,
                      "name": "g1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 182,
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
                      "start": 183,
                      "end": 187,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
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
      "type": "VariableDeclaration",
      "start": 198,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "name": "g2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 207,
            "end": 219,
            "callee": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "G",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 212,
              "end": 217,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 213,
                  "end": 216,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 213,
                    "end": 216,
                    "left": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
