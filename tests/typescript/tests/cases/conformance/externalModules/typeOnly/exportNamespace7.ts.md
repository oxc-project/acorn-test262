__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 18,
      "end": 35,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 25,
        "end": 35,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
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
          "start": 33,
          "end": 35,
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
      "start": 36,
      "end": 53,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 43,
        "end": 53,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "C",
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
  "end": 44,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 25,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 43,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 33,
        "end": 43,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 41,
          "end": 43,
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
  "end": 119,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
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
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
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
        "start": 24,
        "end": 29,
        "value": "./b",
        "raw": "\"./b\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 50,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 39,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 42,
            "end": 49,
            "callee": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 81,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 70,
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 69,
                "end": 70,
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 73,
            "end": 80,
            "callee": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 112,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 101,
            "decorators": [],
            "name": "___",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 104,
            "end": 111,
            "callee": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 25,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "exportKind": "type"
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
  "end": 123,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
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
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
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
        "start": 24,
        "end": 29,
        "value": "./d",
        "raw": "\"./d\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 50,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 39,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 42,
            "end": 49,
            "callee": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 82,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 71,
            "decorators": [],
            "name": "__",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 74,
            "end": 81,
            "callee": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 114,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 103,
            "decorators": [],
            "name": "___",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 106,
            "end": 113,
            "callee": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
