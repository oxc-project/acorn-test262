__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 24
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
                },
                "start": 24,
                "end": 32
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
              "start": 21,
              "end": 33
            }
          ],
          "start": 15,
          "end": 35
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 35
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                },
                "start": 48,
                "end": 51
              },
              "start": 47,
              "end": 51
            },
            "init": null,
            "definite": false,
            "start": 47,
            "end": 51
          }
        ],
        "declare": false,
        "start": 43,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 72
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "typeArguments": null,
            "start": 76,
            "end": 77
          },
          "start": 74,
          "end": 77
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 87,
                "end": 91
              },
              "start": 80,
              "end": 92
            }
          ],
          "start": 78,
          "end": 94
        },
        "expression": false,
        "start": 60,
        "end": 94
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 53,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 24
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
                },
                "start": 24,
                "end": 32
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
              "start": 21,
              "end": 33
            }
          ],
          "start": 15,
          "end": 35
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 35
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 44
                },
                "typeArguments": null,
                "start": 43,
                "end": 44
              },
              "start": 41,
              "end": 44
            },
            "start": 40,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 44
        }
      ],
      "declare": false,
      "start": 36,
      "end": 45
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 65
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "typeArguments": null,
            "start": 69,
            "end": 70
          },
          "start": 67,
          "end": 70
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 80,
                "end": 84
              },
              "start": 73,
              "end": 85
            }
          ],
          "start": 71,
          "end": 87
        },
        "expression": false,
        "start": 53,
        "end": 87
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 87
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 24
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
                },
                "start": 24,
                "end": 32
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
              "start": 21,
              "end": 33
            }
          ],
          "start": 15,
          "end": 35
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 35
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 51
                  },
                  "typeArguments": null,
                  "start": 50,
                  "end": 51
                },
                "start": 48,
                "end": 51
              },
              "start": 47,
              "end": 51
            },
            "init": null,
            "definite": false,
            "start": 47,
            "end": 51
          }
        ],
        "declare": false,
        "start": 43,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 72
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "typeArguments": null,
            "start": 76,
            "end": 77
          },
          "start": 74,
          "end": 77
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 87,
                "end": 91
              },
              "start": 80,
              "end": 92
            }
          ],
          "start": 78,
          "end": 94
        },
        "expression": false,
        "start": 60,
        "end": 94
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 53,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "bing",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 25
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                },
                "start": 25,
                "end": 33
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
              "start": 21,
              "end": 34
            }
          ],
          "start": 15,
          "end": 36
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "typeArguments": null,
                  "start": 51,
                  "end": 52
                },
                "start": 49,
                "end": 52
              },
              "start": 48,
              "end": 52
            },
            "init": null,
            "definite": false,
            "start": 48,
            "end": 52
          }
        ],
        "declare": false,
        "start": 44,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 53
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 73
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "typeArguments": null,
            "start": 77,
            "end": 78
          },
          "start": 75,
          "end": 78
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 88,
                "end": 92
              },
              "start": 81,
              "end": 93
            }
          ],
          "start": 79,
          "end": 95
        },
        "expression": false,
        "start": 61,
        "end": 95
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 95
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 96
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require",
          "raw": "\"./importDecl_require\"",
          "start": 20,
          "end": 42
        },
        "start": 12,
        "end": 43
      },
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 65
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 71
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "start": 69,
              "end": 73
            },
            "typeArguments": null,
            "start": 69,
            "end": 73
          },
          "start": 67,
          "end": 73
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 83,
                "end": 87
              },
              "start": 76,
              "end": 88
            }
          ],
          "start": 74,
          "end": 90
        },
        "expression": false,
        "start": 52,
        "end": 90
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 45,
      "end": 90
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 238
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require",
          "raw": "\"./importDecl_require\"",
          "start": 249,
          "end": 271
        },
        "start": 241,
        "end": 272
      },
      "importKind": "value",
      "start": 229,
      "end": 273
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x4",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 300
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 307
              },
              "optional": false,
              "computed": false,
              "start": 303,
              "end": 307
            },
            "definite": false,
            "start": 298,
            "end": 307
          }
        ],
        "declare": false,
        "start": 294,
        "end": 308
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 287,
      "end": 308
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 322
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 327
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 329
              },
              "optional": false,
              "computed": false,
              "start": 325,
              "end": 329
            },
            "definite": false,
            "start": 320,
            "end": 329
          }
        ],
        "declare": false,
        "start": 316,
        "end": 330
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 309,
      "end": 330
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 344
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 349
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 353
                },
                "optional": false,
                "computed": false,
                "start": 347,
                "end": 353
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 347,
              "end": 355
            },
            "definite": false,
            "start": 342,
            "end": 355
          }
        ],
        "declare": false,
        "start": 338,
        "end": 356
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 331,
      "end": 356
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 375,
          "end": 377
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 395,
                      "end": 397
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 402
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 403,
                        "end": 404
                      },
                      "optional": false,
                      "computed": false,
                      "start": 400,
                      "end": 404
                    },
                    "definite": false,
                    "start": 395,
                    "end": 404
                  }
                ],
                "declare": false,
                "start": 391,
                "end": 405
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 384,
              "end": 405
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 423
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 426,
                        "end": 428
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 429,
                        "end": 430
                      },
                      "optional": false,
                      "computed": false,
                      "start": 426,
                      "end": 430
                    },
                    "definite": false,
                    "start": 421,
                    "end": 430
                  }
                ],
                "declare": false,
                "start": 417,
                "end": 431
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 410,
              "end": 431
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 449
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 454
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 455,
                          "end": 458
                        },
                        "optional": false,
                        "computed": false,
                        "start": 452,
                        "end": 458
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 452,
                      "end": 460
                    },
                    "definite": false,
                    "start": 447,
                    "end": 460
                  }
                ],
                "declare": false,
                "start": 443,
                "end": 461
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 436,
              "end": 461
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 473
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 478
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 480
                    },
                    "optional": false,
                    "computed": false,
                    "start": 476,
                    "end": 480
                  },
                  "definite": false,
                  "start": 471,
                  "end": 480
                }
              ],
              "declare": false,
              "start": 467,
              "end": 481
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 492
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 495,
                      "end": 497
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 499
                    },
                    "optional": false,
                    "computed": false,
                    "start": 495,
                    "end": 499
                  },
                  "definite": false,
                  "start": 490,
                  "end": 499
                }
              ],
              "declare": false,
              "start": 486,
              "end": 500
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 509,
                    "end": 511
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 516
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 517,
                        "end": 520
                      },
                      "optional": false,
                      "computed": false,
                      "start": 514,
                      "end": 520
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 514,
                    "end": 522
                  },
                  "definite": false,
                  "start": 509,
                  "end": 522
                }
              ],
              "declare": false,
              "start": 505,
              "end": 523
            }
          ],
          "start": 378,
          "end": 525
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 365,
        "end": 525
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 358,
      "end": 525
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 565
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require1",
          "raw": "\"./importDecl_require1\"",
          "start": 576,
          "end": 599
        },
        "start": 568,
        "end": 600
      },
      "importKind": "value",
      "start": 552,
      "end": 601
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useGlo_m4_d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 625
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 628,
                "end": 634
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 636
              },
              "optional": false,
              "computed": false,
              "start": 628,
              "end": 636
            },
            "definite": false,
            "start": 613,
            "end": 636
          }
        ],
        "declare": false,
        "start": 609,
        "end": 637
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 602,
      "end": 637
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useGlo_m4_f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 661
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_m4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 670
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 674
                },
                "optional": false,
                "computed": false,
                "start": 664,
                "end": 674
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 664,
              "end": 676
            },
            "definite": false,
            "start": 649,
            "end": 676
          }
        ],
        "declare": false,
        "start": 645,
        "end": 677
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 638,
      "end": 677
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fncOnly_m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 740
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require2",
          "raw": "\"./importDecl_require2\"",
          "start": 751,
          "end": 774
        },
        "start": 743,
        "end": 775
      },
      "importKind": "value",
      "start": 723,
      "end": 776
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useFncOnly_m4_f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 788,
              "end": 804
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fncOnly_m4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 817
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 818,
                  "end": 821
                },
                "optional": false,
                "computed": false,
                "start": 807,
                "end": 821
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 807,
              "end": 823
            },
            "definite": false,
            "start": 788,
            "end": 823
          }
        ],
        "declare": false,
        "start": 784,
        "end": 824
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 777,
      "end": 824
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "private_m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 872,
        "end": 882
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require3",
          "raw": "\"./importDecl_require3\"",
          "start": 893,
          "end": 916
        },
        "start": 885,
        "end": 917
      },
      "importKind": "value",
      "start": 865,
      "end": 918
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "usePrivate_m4_m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 936,
          "end": 952
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 963,
                    "end": 965
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private_m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 968,
                      "end": 978
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 979,
                      "end": 980
                    },
                    "optional": false,
                    "computed": false,
                    "start": 968,
                    "end": 980
                  },
                  "definite": false,
                  "start": 963,
                  "end": 980
                }
              ],
              "declare": false,
              "start": 959,
              "end": 981
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 990,
                    "end": 992
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private_m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 995,
                      "end": 1005
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1006,
                      "end": 1007
                    },
                    "optional": false,
                    "computed": false,
                    "start": 995,
                    "end": 1007
                  },
                  "definite": false,
                  "start": 990,
                  "end": 1007
                }
              ],
              "declare": false,
              "start": 986,
              "end": 1008
            },
            {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1017,
                    "end": 1019
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "private_m4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1022,
                        "end": 1032
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1033,
                        "end": 1036
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1022,
                      "end": 1036
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1022,
                    "end": 1038
                  },
                  "definite": false,
                  "start": 1017,
                  "end": 1038
                }
              ],
              "declare": false,
              "start": 1013,
              "end": 1039
            }
          ],
          "start": 953,
          "end": 1041
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 926,
        "end": 1041
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 919,
      "end": 1041
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1079,
        "end": 1081
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require4",
          "raw": "\"./importDecl_require4\"",
          "start": 1092,
          "end": 1115
        },
        "start": 1084,
        "end": 1116
      },
      "importKind": "value",
      "start": 1072,
      "end": 1117
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1129,
              "end": 1130
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1135
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1136,
                  "end": 1140
                },
                "optional": false,
                "computed": false,
                "start": 1133,
                "end": 1140
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1133,
              "end": 1142
            },
            "definite": false,
            "start": 1129,
            "end": 1142
          }
        ],
        "declare": false,
        "start": 1125,
        "end": 1143
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1118,
      "end": 1143
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiImport_m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1199,
        "end": 1213
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require",
          "raw": "\"./importDecl_require\"",
          "start": 1224,
          "end": 1246
        },
        "start": 1216,
        "end": 1247
      },
      "importKind": "value",
      "start": 1192,
      "end": 1248
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useMultiImport_m4_x4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1293
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiImport_m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1296,
                "end": 1310
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1311,
                "end": 1312
              },
              "optional": false,
              "computed": false,
              "start": 1296,
              "end": 1312
            },
            "definite": false,
            "start": 1273,
            "end": 1312
          }
        ],
        "declare": false,
        "start": 1269,
        "end": 1313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1262,
      "end": 1313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useMultiImport_m4_d4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1345
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiImport_m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1362
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1363,
                "end": 1364
              },
              "optional": false,
              "computed": false,
              "start": 1348,
              "end": 1364
            },
            "definite": false,
            "start": 1325,
            "end": 1364
          }
        ],
        "declare": false,
        "start": 1321,
        "end": 1365
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1314,
      "end": 1365
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "useMultiImport_m4_f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1377,
              "end": 1397
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiImport_m4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1400,
                  "end": 1414
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1415,
                  "end": 1418
                },
                "optional": false,
                "computed": false,
                "start": 1400,
                "end": 1418
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1400,
              "end": 1420
            },
            "definite": false,
            "start": 1377,
            "end": 1420
          }
        ],
        "declare": false,
        "start": 1373,
        "end": 1421
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1366,
      "end": 1421
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 229,
  "end": 1421
}
```
