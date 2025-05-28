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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 35,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 15,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 35,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 16,
                  "end": 20,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
    {
      "type": "TSModuleDeclaration",
      "start": 38,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 68,
                "end": 81,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 70,
                    "end": 79,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 73,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 73,
                      "end": 79,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 76,
                        "end": 79,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
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
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 127,
                        "end": 138,
                        "body": []
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
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 171,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 170,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 157,
                  "decorators": [],
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 160,
                  "end": 170,
                  "callee": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 165,
                    "decorators": [],
                    "name": "G",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  "arguments": []
                },
                "definite": false
              }
            ],
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
                      "decorators": [],
                      "name": "g1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 182,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 183,
                      "end": 187,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "decorators": [],
            "name": "g2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 207,
            "end": 219,
            "callee": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              ]
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
