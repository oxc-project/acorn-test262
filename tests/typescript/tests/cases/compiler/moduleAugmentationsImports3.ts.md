__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 28,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 27,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 27,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 16,
              "end": 26,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17,
                "end": 25,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 19,
                  "end": 25
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 51,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 48,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 35,
              "end": 48,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 36,
                  "end": 46,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 39,
                      "end": 45
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
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"C\"",
        "value": "C"
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
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 150,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 150,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 25,
            "end": 45,
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 41,
              "end": 44,
              "raw": "\"a\"",
              "value": "a"
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 33,
                "end": 34,
                "imported": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "phase": null,
            "attributes": []
          },
          {
            "type": "ImportDeclaration",
            "start": 50,
            "end": 70,
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 66,
              "end": 69,
              "raw": "\"b\"",
              "value": "b"
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 58,
                "end": 59,
                "imported": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "phase": null,
            "attributes": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 75,
            "end": 148,
            "kind": "module",
            "body": {
              "type": "TSModuleBlock",
              "start": 86,
              "end": 148,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 96,
                  "end": 142,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 108,
                    "end": 142,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 122,
                        "end": 132,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 126,
                          "decorators": [],
                          "name": "getB",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [],
                        "readonly": false,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 128,
                          "end": 131,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 130,
                            "end": 131,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 130,
                              "end": 131,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "static": false,
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Literal",
              "start": 82,
              "end": 85,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"D\"",
        "value": "D"
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
  "end": 222,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 47,
      "end": 69,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 68,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 55,
          "end": 56,
          "imported": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 70,
      "end": 92,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 88,
        "end": 91,
        "raw": "\"C\"",
        "value": "C"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 78,
          "end": 81,
          "imported": {
            "type": "Identifier",
            "start": 78,
            "end": 81,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 78,
            "end": 81,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 148,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 94,
          "end": 112,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 94,
            "end": 105,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 105,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 106,
            "end": 112,
            "decorators": [],
            "name": "getCls",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 115,
          "end": 148,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 127,
            "end": 148,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 129,
                "end": 146,
                "argument": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 145,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 150,
      "end": 221,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 171,
        "end": 221,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 177,
            "end": 219,
            "body": {
              "type": "TSInterfaceBody",
              "start": 189,
              "end": 219,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 199,
                  "end": 213,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 205,
                    "decorators": [],
                    "name": "getCls",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 209,
                      "end": 212,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 212,
                        "decorators": [],
                        "name": "Cls",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 165,
        "end": 170,
        "raw": "\"./a\"",
        "value": "./a"
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
  "start": 31,
  "end": 154,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 53,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 47,
        "end": 52,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 39,
          "end": 40,
          "imported": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 54,
      "end": 65,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 64,
        "raw": "\"D\"",
        "value": "D"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 66,
      "end": 77,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 76,
        "raw": "\"e\"",
        "value": "e"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 87,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 87,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 89,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 97,
            "end": 117,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 97,
              "end": 115,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 97,
                "end": 107,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 97,
                  "end": 105,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 97,
                    "end": 103,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 103,
                      "decorators": [],
                      "name": "getB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 108,
                "end": 115,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 127,
            "end": 153,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 127,
              "end": 151,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 127,
                "end": 139,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 127,
                  "end": 137,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 127,
                    "end": 135,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 135,
                      "decorators": [],
                      "name": "getCls",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 140,
                "end": 151,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
