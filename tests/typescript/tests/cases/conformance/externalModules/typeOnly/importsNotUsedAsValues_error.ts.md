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
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 23,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 41,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 31,
        "end": 41,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 39,
          "end": 41,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 61,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 49,
        "end": 61,
        "id": {
          "type": "Identifier",
          "start": 54,
          "end": 55,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 58,
          "end": 60,
          "members": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 94,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 69,
        "end": 94,
        "id": {
          "type": "Identifier",
          "start": 80,
          "end": 81,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 82,
          "end": 94,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 84,
              "end": 87,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 87,
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 89,
              "end": 92,
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 92,
                "decorators": [],
                "name": "Two",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": true,
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
  "end": 76,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
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
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
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
        "start": 21,
        "end": 26,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 46,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 45,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
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
      "start": 47,
      "end": 56,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 55,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "B",
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
      "start": 57,
      "end": 75,
      "expression": {
        "type": "CallExpression",
        "start": 57,
        "end": 74,
        "callee": {
          "type": "MemberExpression",
          "start": 57,
          "end": 68,
          "object": {
            "type": "Identifier",
            "start": 57,
            "end": 64,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 68,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
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
      ],
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 37,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 63,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 62,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 62,
                  "decorators": [],
                  "name": "Default",
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
      "start": 64,
      "end": 79,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 78,
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
      "start": 80,
      "end": 98,
      "expression": {
        "type": "CallExpression",
        "start": 80,
        "end": 97,
        "callee": {
          "type": "MemberExpression",
          "start": 80,
          "end": 91,
          "object": {
            "type": "Identifier",
            "start": 80,
            "end": 87,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
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
          "local": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
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
        "start": 27,
        "end": 32,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 46,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 45,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 62,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 61,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 61,
                  "decorators": [],
                  "name": "Default",
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
      "start": 63,
      "end": 81,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 80,
        "callee": {
          "type": "MemberExpression",
          "start": 63,
          "end": 74,
          "object": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
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
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
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
        "start": 21,
        "end": 26,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 59,
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
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 58,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 66,
      "expression": {
        "type": "MemberExpression",
        "start": 60,
        "end": 65,
        "object": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 62,
          "end": 65,
          "decorators": [],
          "name": "One",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 84,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 83,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 83,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 106,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 105,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 100,
            "end": 105,
            "object": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 125,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 124,
        "callee": {
          "type": "MemberExpression",
          "start": 107,
          "end": 118,
          "object": {
            "type": "Identifier",
            "start": 107,
            "end": 114,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./a",
        "raw": "'./a'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 34,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 33,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "C",
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
      "start": 35,
      "end": 48,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 47,
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
      "start": 49,
      "end": 67,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 66,
        "callee": {
          "type": "MemberExpression",
          "start": 49,
          "end": 60,
          "object": {
            "type": "Identifier",
            "start": 49,
            "end": 56,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "abstract": false,
      "declare": false
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "value": "./h",
          "raw": "'./h'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 50,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 49,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "H",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 49,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 66,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 65,
        "callee": {
          "type": "MemberExpression",
          "start": 51,
          "end": 62,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 58,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "value": "./h",
          "raw": "'./h'"
        }
      },
      "importKind": "value"
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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 25,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "Two",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "value": "./k",
          "raw": "'./k'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 33,
      "expression": {
        "type": "MemberExpression",
        "start": 27,
        "end": 32,
        "object": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 29,
          "end": 32,
          "decorators": [],
          "name": "One",
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
