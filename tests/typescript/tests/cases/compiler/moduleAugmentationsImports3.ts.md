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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "abstract": false,
        "declare": false
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 27,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 27,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 16,
              "end": 26,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "C",
        "raw": "\"C\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 48,
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
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 35,
              "end": 48,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 36,
                  "end": 46,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "D",
        "raw": "\"D\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 150,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 25,
            "end": 45,
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
                "local": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 41,
              "end": 44,
              "value": "a",
              "raw": "\"a\""
            },
            "phase": null,
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "ImportDeclaration",
            "start": 50,
            "end": 70,
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
                "local": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 66,
              "end": 69,
              "value": "b",
              "raw": "\"b\""
            },
            "phase": null,
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 75,
            "end": 148,
            "id": {
              "type": "Literal",
              "start": 82,
              "end": 85,
              "value": "a",
              "raw": "\"a\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 86,
              "end": 148,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 96,
                  "end": 142,
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 108,
                    "end": 142,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 122,
                        "end": 132,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 126,
                          "decorators": [],
                          "name": "getB",
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
                          "end": 131,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 130,
                            "end": 131,
                            "typeName": {
                              "type": "Identifier",
                              "start": 130,
                              "end": 131,
                              "decorators": [],
                              "name": "B",
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
  "start": 47,
  "end": 222,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 47,
      "end": 69,
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
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 68,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 70,
      "end": 92,
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
          "local": {
            "type": "Identifier",
            "start": 78,
            "end": 81,
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
        "start": 88,
        "end": 91,
        "value": "C",
        "raw": "\"C\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 148,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 94,
          "end": 112,
          "object": {
            "type": "MemberExpression",
            "start": 94,
            "end": 105,
            "object": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 105,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 106,
            "end": 112,
            "decorators": [],
            "name": "getCls",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 115,
          "end": 148,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
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
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 150,
      "end": 221,
      "id": {
        "type": "Literal",
        "start": 165,
        "end": 170,
        "value": "./a",
        "raw": "\"./a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 171,
        "end": 221,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 177,
            "end": 219,
            "id": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 189,
              "end": 219,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 199,
                  "end": 213,
                  "key": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 205,
                    "decorators": [],
                    "name": "getCls",
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
                    "start": 207,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 209,
                      "end": 212,
                      "typeName": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 212,
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
  "start": 31,
  "end": 154,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 53,
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
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 47,
        "end": 52,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 54,
      "end": 65,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 64,
        "value": "D",
        "raw": "\"D\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 66,
      "end": 77,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 76,
        "value": "e",
        "raw": "\"e\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 88,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 87,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "A",
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
      "type": "VariableDeclaration",
      "start": 89,
      "end": 118,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 117,
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
            "callee": {
              "type": "MemberExpression",
              "start": 97,
              "end": 115,
              "object": {
                "type": "MemberExpression",
                "start": 97,
                "end": 107,
                "object": {
                  "type": "CallExpression",
                  "start": 97,
                  "end": 105,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 97,
                    "end": 103,
                    "object": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 103,
                      "decorators": [],
                      "name": "getB",
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
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 108,
                "end": 115,
                "decorators": [],
                "name": "toFixed",
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 154,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 153,
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
            "callee": {
              "type": "MemberExpression",
              "start": 127,
              "end": 151,
              "object": {
                "type": "MemberExpression",
                "start": 127,
                "end": 139,
                "object": {
                  "type": "CallExpression",
                  "start": 127,
                  "end": 137,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 127,
                    "end": 135,
                    "object": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 135,
                      "decorators": [],
                      "name": "getCls",
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
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 140,
                "end": 151,
                "decorators": [],
                "name": "toLowerCase",
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
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
