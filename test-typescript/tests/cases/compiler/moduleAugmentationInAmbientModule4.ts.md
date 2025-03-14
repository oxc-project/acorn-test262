O.d.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 55,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 34,
            "end": 53,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 51,
              "end": 53,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 50,
              "decorators": [],
              "name": "Observable",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 27,
        "raw": "\"Observable\"",
        "value": "Observable"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 57,
      "end": 107,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 76,
        "end": 107,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 82,
            "end": 105,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 92,
              "end": 105,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 94,
                  "end": 103,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "decorators": [],
              "name": "Cls",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 72,
        "end": 75,
        "raw": "\"M\"",
        "value": "M"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 109,
      "end": 259,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 130,
        "end": 259,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 136,
            "end": 160,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 156,
              "end": 159,
              "raw": "\"M\"",
              "value": "M"
            },
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
                  "optional": false
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 148,
                  "decorators": [],
                  "name": "Cls",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSModuleDeclaration",
            "start": 165,
            "end": 257,
            "kind": "module",
            "body": {
              "type": "TSModuleBlock",
              "start": 185,
              "end": 257,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 195,
                  "end": 251,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 216,
                    "end": 251,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 230,
                        "end": 241,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 233,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [],
                        "readonly": false,
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
                              "optional": false
                            }
                          }
                        },
                        "static": false
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 215,
                    "decorators": [],
                    "name": "Observable",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Literal",
              "start": 172,
              "end": 184,
              "raw": "\"Observable\"",
              "value": "Observable"
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 124,
        "end": 129,
        "raw": "\"Map\"",
        "value": "Map"
      }
    }
  ],
  "sourceType": "module"
}
```
O2.d.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 153,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 27,
            "end": 52,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 38,
              "end": 52,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 40,
                  "end": 50,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 42,
                    "decorators": [],
                    "name": "x2",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "decorators": [],
              "name": "Cls2",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 57,
            "end": 151,
            "kind": "module",
            "body": {
              "type": "TSModuleBlock",
              "start": 77,
              "end": 151,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 87,
                  "end": 145,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 108,
                    "end": 145,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 122,
                        "end": 135,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 126,
                          "decorators": [],
                          "name": "foo2",
                          "optional": false
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [],
                        "readonly": false,
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
                              "optional": false
                            }
                          }
                        },
                        "static": false
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 107,
                    "decorators": [],
                    "name": "Observable",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Literal",
              "start": 64,
              "end": 76,
              "raw": "\"Observable\"",
              "value": "Observable"
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"Map\"",
        "value": "Map"
      }
    }
  ],
  "sourceType": "module"
}
```
main.ts
```json
{
  "type": "Program",
  "start": 66,
  "end": 162,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 66,
      "end": 104,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 91,
        "end": 103,
        "raw": "\"Observable\"",
        "value": "Observable"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 74,
            "end": 84,
            "decorators": [],
            "name": "Observable",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 105,
      "end": 118,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 112,
        "end": 117,
        "raw": "\"Map\"",
        "value": "Map"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 136,
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 148,
      "expression": {
        "type": "MemberExpression",
        "start": 138,
        "end": 147,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 138,
          "end": 145,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 138,
            "end": 143,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 161,
      "expression": {
        "type": "MemberExpression",
        "start": 149,
        "end": 160,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 149,
          "end": 157,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 149,
            "end": 155,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 151,
              "end": 155,
              "decorators": [],
              "name": "foo2",
              "optional": false
            }
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 158,
          "end": 160,
          "decorators": [],
          "name": "x2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
