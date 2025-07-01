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
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "Map",
        "raw": "\"Map\"",
        "start": 276,
        "end": 281
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
              "start": 294,
              "end": 298
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
                    "start": 301,
                    "end": 303
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
                    },
                    "start": 303,
                    "end": 311
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
                  "start": 301,
                  "end": 311
                }
              ],
              "start": 299,
              "end": 313
            },
            "abstract": false,
            "declare": false,
            "start": 288,
            "end": 313
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "Observable",
              "raw": "\"Observable\"",
              "start": 325,
              "end": 337
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
                    "start": 358,
                    "end": 368
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
                          "start": 383,
                          "end": 387
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
                              "start": 391,
                              "end": 395
                            },
                            "typeArguments": null,
                            "start": 391,
                            "end": 395
                          },
                          "start": 389,
                          "end": 395
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 383,
                        "end": 396
                      }
                    ],
                    "start": 369,
                    "end": 406
                  },
                  "declare": false,
                  "start": 348,
                  "end": 406
                }
              ],
              "start": 338,
              "end": 412
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 318,
            "end": 412
          }
        ],
        "start": 282,
        "end": 414
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 261,
      "end": 414
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 415
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
            "start": 41,
            "end": 51
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 51
          },
          "importKind": "value",
          "start": 41,
          "end": 51
        }
      ],
      "source": {
        "type": "Literal",
        "value": "Observable",
        "raw": "\"Observable\"",
        "start": 58,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 33,
      "end": 71
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "Map",
        "raw": "\"Map\"",
        "start": 79,
        "end": 84
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 72,
      "end": 85
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
                  "start": 93,
                  "end": 103
                },
                "typeArguments": null,
                "start": 93,
                "end": 103
              },
              "start": 91,
              "end": 103
            },
            "start": 90,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 103
        }
      ],
      "declare": false,
      "start": 86,
      "end": 104
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
              "start": 105,
              "end": 106
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 110
            },
            "optional": false,
            "computed": false,
            "start": 105,
            "end": 110
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 105,
          "end": 112
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "optional": false,
        "computed": false,
        "start": 105,
        "end": 114
      },
      "directive": null,
      "start": 105,
      "end": 115
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
              "start": 116,
              "end": 117
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 122
            },
            "optional": false,
            "computed": false,
            "start": 116,
            "end": 122
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 116,
          "end": 124
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 127
        },
        "optional": false,
        "computed": false,
        "start": 116,
        "end": 127
      },
      "directive": null,
      "start": 116,
      "end": 128
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 128
}
```
