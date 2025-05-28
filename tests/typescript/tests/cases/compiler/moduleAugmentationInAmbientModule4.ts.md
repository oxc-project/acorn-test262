__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 260,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 27,
        "value": "Observable",
        "raw": "\"Observable\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 55,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 34,
            "end": 53,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 50,
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 51,
              "end": 53,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 57,
      "end": 107,
      "id": {
        "type": "Literal",
        "start": 72,
        "end": 75,
        "value": "M",
        "raw": "\"M\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 76,
        "end": 107,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 82,
            "end": 105,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 92,
              "end": 105,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 94,
                  "end": 103,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 103,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 97,
                      "end": 103
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 109,
      "end": 259,
      "id": {
        "type": "Literal",
        "start": 124,
        "end": 129,
        "value": "Map",
        "raw": "\"Map\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 259,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 136,
            "end": 160,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 145,
                "end": 148,
                "imported": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 148,
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null
                },
                "local": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 148,
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 156,
              "end": 159,
              "value": "M",
              "raw": "\"M\""
            },
            "phase": null,
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 165,
            "end": 257,
            "id": {
              "type": "Literal",
              "start": 172,
              "end": 184,
              "value": "Observable",
              "raw": "\"Observable\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 185,
              "end": 257,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 195,
                  "end": 251,
                  "id": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 215,
                    "decorators": [],
                    "name": "Observable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 216,
                    "end": 251,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 230,
                        "end": 241,
                        "key": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 233,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 235,
                          "end": 240,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 237,
                            "end": 240,
                            "typeName": {
                              "type": "Identifier",
                              "start": 237,
                              "end": 240,
                              "decorators": [],
                              "name": "Cls",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 154,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 153,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "Map",
        "raw": "\"Map\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 153,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 27,
            "end": 52,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "decorators": [],
              "name": "Cls2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 38,
              "end": 52,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 40,
                  "end": 50,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 42,
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 44,
                      "end": 50
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 57,
            "end": 151,
            "id": {
              "type": "Literal",
              "start": 64,
              "end": 76,
              "value": "Observable",
              "raw": "\"Observable\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 77,
              "end": 151,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 87,
                  "end": 145,
                  "id": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 107,
                    "decorators": [],
                    "name": "Observable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 108,
                    "end": 145,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 122,
                        "end": 135,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 126,
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 128,
                          "end": 134,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 130,
                            "end": 134,
                            "typeName": {
                              "type": "Identifier",
                              "start": 130,
                              "end": 134,
                              "decorators": [],
                              "name": "Cls2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 66,
  "end": 161,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 66,
      "end": 104,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 74,
          "end": 84,
          "imported": {
            "type": "Identifier",
            "start": 74,
            "end": 84,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 74,
            "end": 84,
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 91,
        "end": 103,
        "value": "Observable",
        "raw": "\"Observable\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 105,
      "end": 118,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 112,
        "end": 117,
        "value": "Map",
        "raw": "\"Map\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 137,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 136,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 136,
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 148,
      "expression": {
        "type": "MemberExpression",
        "start": 138,
        "end": 147,
        "object": {
          "type": "CallExpression",
          "start": 138,
          "end": 145,
          "callee": {
            "type": "MemberExpression",
            "start": 138,
            "end": 143,
            "object": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
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
        "property": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 161,
      "expression": {
        "type": "MemberExpression",
        "start": 149,
        "end": 160,
        "object": {
          "type": "CallExpression",
          "start": 149,
          "end": 157,
          "callee": {
            "type": "MemberExpression",
            "start": 149,
            "end": 155,
            "object": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 151,
              "end": 155,
              "decorators": [],
              "name": "foo2",
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
        "property": {
          "type": "Identifier",
          "start": 158,
          "end": 160,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
