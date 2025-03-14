__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 415,
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 261,
      "end": 414,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 282,
        "end": 414,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 288,
            "end": 313,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 299,
              "end": 313,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 301,
                  "end": 311,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 303,
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
                    "start": 303,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
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
              "start": 294,
              "end": 298,
              "decorators": [],
              "name": "Cls2",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 318,
            "end": 412,
            "kind": "module",
            "body": {
              "type": "TSModuleBlock",
              "start": 338,
              "end": 412,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 348,
                  "end": 406,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 369,
                    "end": 406,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 383,
                        "end": 396,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 387,
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
                          "start": 389,
                          "end": 395,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 391,
                            "end": 395,
                            "typeName": {
                              "type": "Identifier",
                              "start": 391,
                              "end": 395,
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
                    "start": 358,
                    "end": 368,
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
              "start": 325,
              "end": 337,
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
        "start": 276,
        "end": 281,
        "raw": "\"Map\"",
        "value": "Map"
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
  "start": 33,
  "end": 129,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 33,
      "end": 71,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 70,
        "raw": "\"Observable\"",
        "value": "Observable"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 51,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 51,
            "decorators": [],
            "name": "Observable",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 51,
            "decorators": [],
            "name": "Observable",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 72,
      "end": 85,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 79,
        "end": 84,
        "raw": "\"Map\"",
        "value": "Map"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 103,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 103,
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
      "start": 105,
      "end": 115,
      "expression": {
        "type": "MemberExpression",
        "start": 105,
        "end": 114,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 105,
          "end": 112,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 105,
            "end": 110,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
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
          "start": 113,
          "end": 114,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 128,
      "expression": {
        "type": "MemberExpression",
        "start": 116,
        "end": 127,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 116,
          "end": 124,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 116,
            "end": 122,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 118,
              "end": 122,
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
          "start": 125,
          "end": 127,
          "decorators": [],
          "name": "x2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
