__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 23,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 23,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 41,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 39,
          "end": 41,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 61,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 49,
        "end": 61,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 54,
          "end": 55,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 58,
          "end": 60,
          "members": []
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 94,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 69,
        "end": 94,
        "body": {
          "type": "TSEnumBody",
          "start": 82,
          "end": 94,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 84,
              "end": 87,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 87,
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 89,
              "end": 92,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 92,
                "decorators": [],
                "name": "Two",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 81,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 76,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 44,
                "end": 45,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
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
      "start": 47,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "B",
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
      "type": "ExpressionStatement",
      "start": 57,
      "end": 75,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 57,
        "end": 74,
        "arguments": [
          {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 57,
          "end": 68,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 64,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
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
  "end": 99,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 37,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "Default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 16,
          "end": 26,
          "local": {
            "type": "Identifier",
            "start": 21,
            "end": 26,
            "decorators": [],
            "name": "named",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 62,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 62,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 62,
                  "decorators": [],
                  "name": "Default",
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
      "start": 64,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 78,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 78,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 71,
                  "end": 78,
                  "left": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 76,
                    "decorators": [],
                    "name": "named",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "start": 80,
      "end": 98,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 80,
        "end": 97,
        "arguments": [
          {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 80,
          "end": 91,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 80,
            "end": 87,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
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
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 32,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "Default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 18,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 61,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 61,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 61,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 61,
                  "decorators": [],
                  "name": "Default",
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
      "type": "ExpressionStatement",
      "start": 63,
      "end": 81,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 80,
        "arguments": [
          {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 63,
          "end": 74,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
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
  "end": 57,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 126,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 59,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 58,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 39,
          "end": 45,
          "imported": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 66,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 60,
        "end": 65,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 62,
          "end": 65,
          "decorators": [],
          "name": "One",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 75,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 75,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 83,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 97,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 97,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 92,
                  "end": 97,
                  "left": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 97,
                    "decorators": [],
                    "name": "Two",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 100,
            "end": 105,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 124,
        "arguments": [
          {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 107,
          "end": 118,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 107,
            "end": 114,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
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
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "C",
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
      "start": 35,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 47,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 42,
                "end": 47,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 42,
                  "end": 47,
                  "left": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 47,
                    "decorators": [],
                    "name": "Two",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "start": 49,
      "end": 67,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 66,
        "arguments": [
          {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 49,
          "end": 60,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 49,
            "end": 56,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
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
  "end": 23,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 11,
      "end": 22,
      "expression": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "H",
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
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "raw": "'./h'",
          "value": "./h",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "H",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 49,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 66,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 65,
        "arguments": [
          {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 51,
          "end": 62,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 58,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
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
  "end": 56,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "raw": "'./h'",
          "value": "./h",
          "regex": null,
          "bigint": null
        }
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
  "end": 38,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 25,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 25,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 18,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 23,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 26,
      "end": 37,
      "expression": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "K",
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
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "raw": "'./k'",
          "value": "./k",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 33,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 27,
        "end": 32,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 29,
          "end": 32,
          "decorators": [],
          "name": "One",
          "optional": false,
          "typeAnnotation": null
        }
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
  "start": 135,
  "end": 135,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
