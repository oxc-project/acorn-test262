__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "Observable",
        "raw": "\"Observable\"",
        "start": 15,
        "end": 27
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 50
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 51,
              "end": 53
            },
            "abstract": false,
            "declare": false,
            "start": 34,
            "end": 53
          }
        ],
        "start": 28,
        "end": 55
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "M",
        "raw": "\"M\"",
        "start": 72,
        "end": 75
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 91
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    },
                    "start": 95,
                    "end": 103
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
                  "start": 94,
                  "end": 103
                }
              ],
              "start": 92,
              "end": 105
            },
            "abstract": false,
            "declare": false,
            "start": 82,
            "end": 105
          }
        ],
        "start": 76,
        "end": 107
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 57,
      "end": 107
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "Map",
        "raw": "\"Map\"",
        "start": 124,
        "end": 129
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 148
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 148
                },
                "importKind": "value",
                "start": 145,
                "end": 148
              }
            ],
            "source": {
              "type": "Literal",
              "value": "M",
              "raw": "\"M\"",
              "start": 156,
              "end": 159
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 136,
            "end": 160
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "Observable",
              "raw": "\"Observable\"",
              "start": 172,
              "end": 184
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Observable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 215
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 230,
                          "end": 233
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Cls",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 237,
                              "end": 240
                            },
                            "typeArguments": null,
                            "start": 237,
                            "end": 240
                          },
                          "start": 235,
                          "end": 240
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 230,
                        "end": 241
                      }
                    ],
                    "start": 216,
                    "end": 251
                  },
                  "declare": false,
                  "start": 195,
                  "end": 251
                }
              ],
              "start": 185,
              "end": 257
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 165,
            "end": 257
          }
        ],
        "start": 130,
        "end": 259
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 109,
      "end": 259
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 260
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
        "type": "Literal",
        "value": "Map",
        "raw": "\"Map\"",
        "start": 15,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cls2",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 37
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
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 42
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 44,
                      "end": 50
                    },
                    "start": 42,
                    "end": 50
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
                  "start": 40,
                  "end": 50
                }
              ],
              "start": 38,
              "end": 52
            },
            "abstract": false,
            "declare": false,
            "start": 27,
            "end": 52
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "Observable",
              "raw": "\"Observable\"",
              "start": 64,
              "end": 76
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Observable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 107
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 126
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Cls2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 130,
                              "end": 134
                            },
                            "typeArguments": null,
                            "start": 130,
                            "end": 134
                          },
                          "start": 128,
                          "end": 134
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 122,
                        "end": 135
                      }
                    ],
                    "start": 108,
                    "end": 145
                  },
                  "declare": false,
                  "start": 87,
                  "end": 145
                }
              ],
              "start": 77,
              "end": 151
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 57,
            "end": 151
          }
        ],
        "start": 21,
        "end": 153
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 154
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 84
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 84
          },
          "importKind": "value",
          "start": 74,
          "end": 84
        }
      ],
      "source": {
        "type": "Literal",
        "value": "Observable",
        "raw": "\"Observable\"",
        "start": 91,
        "end": 103
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 66,
      "end": 104
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "Map",
        "raw": "\"Map\"",
        "start": 112,
        "end": 117
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 105,
      "end": 118
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 136
                },
                "typeArguments": null,
                "start": 126,
                "end": 136
              },
              "start": 124,
              "end": 136
            },
            "start": 123,
            "end": 136
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 136
        }
      ],
      "declare": false,
      "start": 119,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 143
            },
            "optional": false,
            "computed": false,
            "start": 138,
            "end": 143
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 138,
          "end": 145
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 147
        },
        "optional": false,
        "computed": false,
        "start": 138,
        "end": 147
      },
      "directive": null,
      "start": 138,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 155
            },
            "optional": false,
            "computed": false,
            "start": 149,
            "end": 155
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 149,
          "end": 157
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 160
        },
        "optional": false,
        "computed": false,
        "start": 149,
        "end": 160
      },
      "directive": null,
      "start": 149,
      "end": 161
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 66,
  "end": 161
}
```
