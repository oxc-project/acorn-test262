__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 357,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "mix",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "TMix",
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
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 38,
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 38,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 34,
              "end": 38,
              "typeName": {
                "type": "Identifier",
                "start": 34,
                "end": 38,
                "decorators": [],
                "name": "TMix",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 39,
        "end": 45,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 41,
          "end": 45,
          "typeName": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "TMix",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 190,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 69,
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 72,
            "end": 189,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 189,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 84,
                  "end": 147,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 104,
                    "decorators": [],
                    "name": "_onDispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 104,
                    "end": 147,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 107,
                      "end": 147,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 117,
                          "end": 141,
                          "expression": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 141,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 117,
                              "end": 139,
                              "object": {
                                "type": "ThisExpression",
                                "start": 117,
                                "end": 121
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 139,
                                "decorators": [],
                                "name": "_assertIsStripped",
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
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "protected"
                },
                {
                  "type": "MethodDefinition",
                  "start": 152,
                  "end": 187,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 177,
                    "decorators": [],
                    "name": "_assertIsStripped",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 177,
                    "end": 187,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 180,
                      "end": 187,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 231,
      "end": 267,
      "declaration": {
        "type": "CallExpression",
        "start": 246,
        "end": 266,
        "callee": {
          "type": "Identifier",
          "start": 246,
          "end": 249,
          "decorators": [],
          "name": "mix",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 250,
            "end": 265,
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 268,
      "end": 356,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 275,
        "end": 356,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 281,
          "end": 288,
          "decorators": [],
          "name": "Monitor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "start": 297,
          "end": 317,
          "callee": {
            "type": "Identifier",
            "start": 297,
            "end": 300,
            "decorators": [],
            "name": "mix",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 301,
              "end": 316,
              "decorators": [],
              "name": "DisposableMixin",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 318,
          "end": 356,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 324,
              "end": 354,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 334,
                "end": 344,
                "decorators": [],
                "name": "_onDispose",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 344,
                "end": 354,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 347,
                  "end": 354,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "protected"
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
  "end": 280,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "mix",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "TMix",
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
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 38,
          "decorators": [],
          "name": "mixin",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 38,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 34,
              "end": 38,
              "typeName": {
                "type": "Identifier",
                "start": 34,
                "end": 38,
                "decorators": [],
                "name": "TMix",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 39,
        "end": 45,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 41,
          "end": 45,
          "typeName": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "TMix",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 190,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 69,
            "decorators": [],
            "name": "DisposableMixin",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 72,
            "end": 189,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 189,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 84,
                  "end": 147,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 104,
                    "decorators": [],
                    "name": "_onDispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 104,
                    "end": 147,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 107,
                      "end": 147,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 117,
                          "end": 141,
                          "expression": {
                            "type": "CallExpression",
                            "start": 117,
                            "end": 141,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 117,
                              "end": 139,
                              "object": {
                                "type": "ThisExpression",
                                "start": 117,
                                "end": 121
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 122,
                                "end": 139,
                                "decorators": [],
                                "name": "_assertIsStripped",
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
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "protected"
                },
                {
                  "type": "MethodDefinition",
                  "start": 152,
                  "end": 187,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 177,
                    "decorators": [],
                    "name": "_assertIsStripped",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 177,
                    "end": 187,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 180,
                      "end": 187,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 192,
      "end": 280,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 207,
        "end": 280,
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "start": 221,
          "end": 241,
          "callee": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "decorators": [],
            "name": "mix",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 225,
              "end": 240,
              "decorators": [],
              "name": "DisposableMixin",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 242,
          "end": 280,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 248,
              "end": 278,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 258,
                "end": 268,
                "decorators": [],
                "name": "_onDispose",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 268,
                "end": 278,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 271,
                  "end": 278,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "protected"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
