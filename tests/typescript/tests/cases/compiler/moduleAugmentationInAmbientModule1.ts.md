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
                  "start": 79,
                  "end": 89
                },
                "typeArguments": null,
                "start": 79,
                "end": 89
              },
              "start": 77,
              "end": 89
            },
            "start": 76,
            "end": 89
          },
          "init": null,
          "definite": false,
          "start": 76,
          "end": 89
        }
      ],
      "declare": false,
      "start": 72,
      "end": 90
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
              "start": 91,
              "end": 92
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 96
            },
            "optional": false,
            "computed": false,
            "start": 91,
            "end": 96
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 91,
          "end": 98
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 100
        },
        "optional": false,
        "computed": false,
        "start": 91,
        "end": 100
      },
      "directive": null,
      "start": 91,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 101
}
```
