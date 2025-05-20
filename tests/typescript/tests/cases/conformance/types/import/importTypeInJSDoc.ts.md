__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 97,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 97,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 32,
            "end": 95,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 39,
              "end": 95,
              "body": {
                "type": "TSInterfaceBody",
                "start": 53,
                "end": 95,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 63,
                    "end": 89,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "doer",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 88,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 69,
                        "end": 88,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 70,
                            "end": 79,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 71,
                              "end": 79,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 73,
                                "end": 79
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 81,
                          "end": 88,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 84,
                            "end": 88
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 52,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 25,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ClassDeclaration",
      "start": 98,
      "end": 224,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 140,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 133,
                "end": 139
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 145,
            "end": 189,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 188,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 157,
                "end": 188,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 158,
                    "end": 167,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 159,
                      "end": 167,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 161,
                        "end": 167
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 169,
                    "end": 179,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 171,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 173,
                        "end": 179
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 181,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 184,
                    "end": 188
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 194,
            "end": 222,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 205,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 205,
              "end": 222,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 206,
                  "end": 220,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 209,
                      "end": 220,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 209,
                        "end": 220,
                        "left": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 216,
                          "decorators": [],
                          "name": "MyClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 220,
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 119,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 225,
      "end": 274,
      "body": {
        "type": "TSModuleBlock",
        "start": 240,
        "end": 274,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 246,
            "end": 272,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 271,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 271,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 271,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 257,
                      "end": 271,
                      "exprName": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 271,
                        "decorators": [],
                        "name": "MyClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 239,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "TSExportAssignment",
      "start": 275,
      "end": 292,
      "expression": {
        "type": "Identifier",
        "start": 284,
        "end": 291,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      }
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
  "start": 47,
  "end": 267,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 91,
            "end": 100,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 134,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 133,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 109,
          "end": 133,
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 117,
              "end": 132,
              "properties": [
                {
                  "type": "Property",
                  "start": 118,
                  "end": 131,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 122,
                    "decorators": [],
                    "name": "doer",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 124,
                    "end": 131,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 127,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 131,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 113,
            "end": 116,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 184,
            "end": 200,
            "properties": [
              {
                "type": "Property",
                "start": 186,
                "end": 198,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 190,
                  "decorators": [],
                  "name": "doer",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 192,
                  "end": 198,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "q",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 266,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 259,
            "end": 265,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
