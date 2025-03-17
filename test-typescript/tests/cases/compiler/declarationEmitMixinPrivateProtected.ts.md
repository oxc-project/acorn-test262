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
        "name": "mix",
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
          "start": 27,
          "end": 38,
          "name": "mixin",
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
                "name": "TMix",
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
      "body": null,
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
              "name": "TMix",
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
            "name": "TMix",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 69,
            "name": "DisposableMixin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 72,
            "end": 189,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 189,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 84,
                  "end": 147,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 104,
                    "name": "_onDispose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 104,
                    "end": 147,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                                "name": "_assertIsStripped",
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "protected"
                },
                {
                  "type": "MethodDefinition",
                  "start": 152,
                  "end": 187,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 177,
                    "name": "_assertIsStripped",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 177,
                    "end": 187,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 180,
                      "end": 187,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
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
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "mix",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 250,
            "end": 265,
            "name": "DisposableMixin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "id": {
          "type": "Identifier",
          "start": 281,
          "end": 288,
          "name": "Monitor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 297,
          "end": 317,
          "callee": {
            "type": "Identifier",
            "start": 297,
            "end": 300,
            "name": "mix",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 301,
              "end": 316,
              "name": "DisposableMixin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 318,
          "end": 356,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 324,
              "end": 354,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 334,
                "end": 344,
                "name": "_onDispose",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 344,
                "end": 354,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 347,
                  "end": 354,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "protected"
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
        "name": "mix",
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
          "start": 27,
          "end": 38,
          "name": "mixin",
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
                "name": "TMix",
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
      "body": null,
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
              "name": "TMix",
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
            "name": "TMix",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 69,
            "name": "DisposableMixin",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 72,
            "end": 189,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 189,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 84,
                  "end": 147,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 104,
                    "name": "_onDispose",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 104,
                    "end": 147,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                                "name": "_assertIsStripped",
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "protected"
                },
                {
                  "type": "MethodDefinition",
                  "start": 152,
                  "end": 187,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 177,
                    "name": "_assertIsStripped",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 177,
                    "end": 187,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 180,
                      "end": 187,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
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
          "definite": false
        }
      ],
      "kind": "const",
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
        "id": null,
        "superClass": {
          "type": "CallExpression",
          "start": 221,
          "end": 241,
          "callee": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "name": "mix",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 225,
              "end": 240,
              "name": "DisposableMixin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 242,
          "end": 280,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 248,
              "end": 278,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 258,
                "end": 268,
                "name": "_onDispose",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 268,
                "end": 278,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 271,
                  "end": 278,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "protected"
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
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
