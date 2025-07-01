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
          "start": 372,
          "end": 374
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
                      "start": 392,
                      "end": 394
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 399
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 401
                      },
                      "optional": false,
                      "computed": false,
                      "start": 397,
                      "end": 401
                    },
                    "definite": false,
                    "start": 392,
                    "end": 401
                  }
                ],
                "declare": false,
                "start": 388,
                "end": 402
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 381,
              "end": 402
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
                      "start": 418,
                      "end": 420
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 425
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 426,
                        "end": 427
                      },
                      "optional": false,
                      "computed": false,
                      "start": 423,
                      "end": 427
                    },
                    "definite": false,
                    "start": 418,
                    "end": 427
                  }
                ],
                "declare": false,
                "start": 414,
                "end": 428
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 407,
              "end": 428
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
                      "start": 444,
                      "end": 446
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
                          "start": 449,
                          "end": 451
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 455
                        },
                        "optional": false,
                        "computed": false,
                        "start": 449,
                        "end": 455
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 449,
                      "end": 457
                    },
                    "definite": false,
                    "start": 444,
                    "end": 457
                  }
                ],
                "declare": false,
                "start": 440,
                "end": 458
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 433,
              "end": 458
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
                    "start": 468,
                    "end": 470
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 475
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 477
                    },
                    "optional": false,
                    "computed": false,
                    "start": 473,
                    "end": 477
                  },
                  "definite": false,
                  "start": 468,
                  "end": 477
                }
              ],
              "declare": false,
              "start": 464,
              "end": 478
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
                    "start": 487,
                    "end": 489
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 494
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 495,
                      "end": 496
                    },
                    "optional": false,
                    "computed": false,
                    "start": 492,
                    "end": 496
                  },
                  "definite": false,
                  "start": 487,
                  "end": 496
                }
              ],
              "declare": false,
              "start": 483,
              "end": 497
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
                    "start": 506,
                    "end": 508
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
                        "start": 511,
                        "end": 513
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 517
                      },
                      "optional": false,
                      "computed": false,
                      "start": 511,
                      "end": 517
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 511,
                    "end": 519
                  },
                  "definite": false,
                  "start": 506,
                  "end": 519
                }
              ],
              "declare": false,
              "start": 502,
              "end": 520
            }
          ],
          "start": 375,
          "end": 522
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 365,
        "end": 522
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 358,
      "end": 522
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 562
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require1",
          "raw": "\"./importDecl_require1\"",
          "start": 573,
          "end": 596
        },
        "start": 565,
        "end": 597
      },
      "importKind": "value",
      "start": 549,
      "end": 598
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
              "start": 610,
              "end": 622
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 631
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 632,
                "end": 633
              },
              "optional": false,
              "computed": false,
              "start": 625,
              "end": 633
            },
            "definite": false,
            "start": 610,
            "end": 633
          }
        ],
        "declare": false,
        "start": 606,
        "end": 634
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 599,
      "end": 634
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
              "start": 646,
              "end": 658
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
                  "start": 661,
                  "end": 667
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 668,
                  "end": 671
                },
                "optional": false,
                "computed": false,
                "start": 661,
                "end": 671
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 661,
              "end": 673
            },
            "definite": false,
            "start": 646,
            "end": 673
          }
        ],
        "declare": false,
        "start": 642,
        "end": 674
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 635,
      "end": 674
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fncOnly_m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 737
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require2",
          "raw": "\"./importDecl_require2\"",
          "start": 748,
          "end": 771
        },
        "start": 740,
        "end": 772
      },
      "importKind": "value",
      "start": 720,
      "end": 773
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
              "start": 785,
              "end": 801
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
                  "start": 804,
                  "end": 814
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 818
                },
                "optional": false,
                "computed": false,
                "start": 804,
                "end": 818
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 804,
              "end": 820
            },
            "definite": false,
            "start": 785,
            "end": 820
          }
        ],
        "declare": false,
        "start": 781,
        "end": 821
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 774,
      "end": 821
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "private_m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 879
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require3",
          "raw": "\"./importDecl_require3\"",
          "start": 890,
          "end": 913
        },
        "start": 882,
        "end": 914
      },
      "importKind": "value",
      "start": 862,
      "end": 915
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
          "start": 930,
          "end": 946
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
                    "start": 957,
                    "end": 959
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private_m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 962,
                      "end": 972
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 973,
                      "end": 974
                    },
                    "optional": false,
                    "computed": false,
                    "start": 962,
                    "end": 974
                  },
                  "definite": false,
                  "start": 957,
                  "end": 974
                }
              ],
              "declare": false,
              "start": 953,
              "end": 975
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
                    "start": 984,
                    "end": 986
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private_m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 989,
                      "end": 999
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1000,
                      "end": 1001
                    },
                    "optional": false,
                    "computed": false,
                    "start": 989,
                    "end": 1001
                  },
                  "definite": false,
                  "start": 984,
                  "end": 1001
                }
              ],
              "declare": false,
              "start": 980,
              "end": 1002
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
                    "start": 1011,
                    "end": 1013
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
                        "start": 1016,
                        "end": 1026
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1027,
                        "end": 1030
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1016,
                      "end": 1030
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1016,
                    "end": 1032
                  },
                  "definite": false,
                  "start": 1011,
                  "end": 1032
                }
              ],
              "declare": false,
              "start": 1007,
              "end": 1033
            }
          ],
          "start": 947,
          "end": 1035
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 923,
        "end": 1035
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 916,
      "end": 1035
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1073,
        "end": 1075
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require4",
          "raw": "\"./importDecl_require4\"",
          "start": 1086,
          "end": 1109
        },
        "start": 1078,
        "end": 1110
      },
      "importKind": "value",
      "start": 1066,
      "end": 1111
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
              "start": 1123,
              "end": 1124
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
                  "start": 1127,
                  "end": 1129
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1130,
                  "end": 1134
                },
                "optional": false,
                "computed": false,
                "start": 1127,
                "end": 1134
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1127,
              "end": 1136
            },
            "definite": false,
            "start": 1123,
            "end": 1136
          }
        ],
        "declare": false,
        "start": 1119,
        "end": 1137
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1112,
      "end": 1137
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multiImport_m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1207
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./importDecl_require",
          "raw": "\"./importDecl_require\"",
          "start": 1218,
          "end": 1240
        },
        "start": 1210,
        "end": 1241
      },
      "importKind": "value",
      "start": 1186,
      "end": 1242
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
              "start": 1267,
              "end": 1287
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiImport_m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1304
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1305,
                "end": 1306
              },
              "optional": false,
              "computed": false,
              "start": 1290,
              "end": 1306
            },
            "definite": false,
            "start": 1267,
            "end": 1306
          }
        ],
        "declare": false,
        "start": 1263,
        "end": 1307
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1256,
      "end": 1307
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
              "start": 1319,
              "end": 1339
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiImport_m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1342,
                "end": 1356
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1357,
                "end": 1358
              },
              "optional": false,
              "computed": false,
              "start": 1342,
              "end": 1358
            },
            "definite": false,
            "start": 1319,
            "end": 1358
          }
        ],
        "declare": false,
        "start": 1315,
        "end": 1359
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1308,
      "end": 1359
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
              "start": 1371,
              "end": 1391
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
                  "start": 1394,
                  "end": 1408
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1409,
                  "end": 1412
                },
                "optional": false,
                "computed": false,
                "start": 1394,
                "end": 1412
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1394,
              "end": 1414
            },
            "definite": false,
            "start": 1371,
            "end": 1414
          }
        ],
        "declare": false,
        "start": 1367,
        "end": 1415
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1360,
      "end": 1415
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 229,
  "end": 1415
}
```
