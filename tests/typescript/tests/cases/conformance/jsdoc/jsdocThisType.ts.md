__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 45,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 45,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 43,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 32,
                  "end": 42,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 38,
                      "end": 42
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 83,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 83,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 60,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 63,
          "end": 82,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 64,
              "end": 73,
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 68,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 73,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 73,
                    "decorators": [],
                    "name": "Foo",
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
            "start": 75,
            "end": 82,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 78,
              "end": 82
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "start": 35,
  "end": 574,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 84,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 42,
        "end": 84,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 50,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 84,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 84,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 70,
                    "end": 82,
                    "expression": {
                      "type": "CallExpression",
                      "start": 70,
                      "end": 81,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 70,
                        "end": 79,
                        "object": {
                          "type": "ThisExpression",
                          "start": 70,
                          "end": 74
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 79,
                          "decorators": [],
                          "name": "test",
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
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 162,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 128,
        "end": 162,
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 139,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 142,
          "end": 162,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 148,
              "end": 160,
              "expression": {
                "type": "CallExpression",
                "start": 148,
                "end": 159,
                "callee": {
                  "type": "MemberExpression",
                  "start": 148,
                  "end": 157,
                  "object": {
                    "type": "ThisExpression",
                    "start": 148,
                    "end": 152
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 157,
                    "decorators": [],
                    "name": "test",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 217,
      "end": 266,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 224,
        "end": 266,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 230,
            "end": 266,
            "id": {
              "type": "Identifier",
              "start": 230,
              "end": 232,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "FunctionExpression",
              "start": 235,
              "end": 266,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 266,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 252,
                    "end": 264,
                    "expression": {
                      "type": "CallExpression",
                      "start": 252,
                      "end": 263,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 252,
                        "end": 261,
                        "object": {
                          "type": "ThisExpression",
                          "start": 252,
                          "end": 256
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 261,
                          "decorators": [],
                          "name": "test",
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
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 321,
      "end": 362,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 328,
        "end": 362,
        "id": {
          "type": "Identifier",
          "start": 337,
          "end": 339,
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 342,
          "end": 362,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 348,
              "end": 360,
              "expression": {
                "type": "CallExpression",
                "start": 348,
                "end": 359,
                "callee": {
                  "type": "MemberExpression",
                  "start": 348,
                  "end": 357,
                  "object": {
                    "type": "ThisExpression",
                    "start": 348,
                    "end": 352
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 357,
                    "decorators": [],
                    "name": "test",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 423,
      "end": 472,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 430,
        "end": 472,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 436,
            "end": 472,
            "id": {
              "type": "Identifier",
              "start": 436,
              "end": 438,
              "decorators": [],
              "name": "f5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "FunctionExpression",
              "start": 441,
              "end": 472,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 452,
                "end": 472,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 458,
                    "end": 470,
                    "expression": {
                      "type": "CallExpression",
                      "start": 458,
                      "end": 469,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 458,
                        "end": 467,
                        "object": {
                          "type": "ThisExpression",
                          "start": 458,
                          "end": 462
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 463,
                          "end": 467,
                          "decorators": [],
                          "name": "test",
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
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 533,
      "end": 574,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 540,
        "end": 574,
        "id": {
          "type": "Identifier",
          "start": 549,
          "end": 551,
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 554,
          "end": 574,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 560,
              "end": 572,
              "expression": {
                "type": "CallExpression",
                "start": 560,
                "end": 571,
                "callee": {
                  "type": "MemberExpression",
                  "start": 560,
                  "end": 569,
                  "object": {
                    "type": "ThisExpression",
                    "start": 560,
                    "end": 564
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 569,
                    "decorators": [],
                    "name": "test",
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
