__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 35,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "d",
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
          "end": 35,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 33,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 24,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 52,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 52,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 51,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "d",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 53,
      "end": 94,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 60,
        "end": 94,
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 72,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 74,
          "end": 77,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 76,
            "end": 77,
            "typeName": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 78,
          "end": 94,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 80,
              "end": 92,
              "argument": {
                "type": "Literal",
                "start": 87,
                "end": 91,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
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
  "end": 88,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 35,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "d",
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
          "end": 35,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 33,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 24,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
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
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 45,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "x",
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
                  "name": "d",
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
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 87,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 53,
        "end": 87,
        "id": {
          "type": "Identifier",
          "start": 62,
          "end": 65,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 71,
          "end": 87,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 73,
              "end": 85,
              "argument": {
                "type": "Literal",
                "start": 80,
                "end": 84,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
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
  "end": 95,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 35,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "d",
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
          "end": 35,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 33,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 24,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 24,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 26,
                  "end": 32
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 52,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 52,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 50,
                  "end": 51,
                  "typeName": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "d",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 53,
      "end": 94,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 60,
        "end": 94,
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 72,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 74,
          "end": 77,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 76,
            "end": 77,
            "typeName": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 78,
          "end": 94,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 80,
              "end": 92,
              "argument": {
                "type": "Literal",
                "start": 87,
                "end": 91,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
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
  "end": 96,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 36,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "d",
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
          "end": 36,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 34,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 25,
                "decorators": [],
                "name": "bing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 53,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 53,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 52,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 51,
                  "end": 52,
                  "typeName": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "d",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 95,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 61,
        "end": 95,
        "id": {
          "type": "Identifier",
          "start": 70,
          "end": 73,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 75,
          "end": 78,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 77,
            "end": 78,
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 79,
          "end": 95,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 81,
              "end": 93,
              "argument": {
                "type": "Literal",
                "start": 88,
                "end": 92,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
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
  "end": 91,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 43,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 42,
          "value": "./importDecl_require",
          "raw": "\"./importDecl_require\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 90,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 52,
        "end": 90,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 65,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 67,
          "end": 73,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 69,
            "end": 73,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 69,
              "end": 73,
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 71,
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 74,
          "end": 90,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 76,
              "end": 88,
              "argument": {
                "type": "Literal",
                "start": 83,
                "end": 87,
                "value": null,
                "raw": "null"
              }
            }
          ]
        },
        "expression": false
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
  "start": 229,
  "end": 1415,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 229,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 238,
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 241,
        "end": 272,
        "expression": {
          "type": "Literal",
          "start": 249,
          "end": 271,
          "value": "./importDecl_require",
          "raw": "\"./importDecl_require\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 287,
      "end": 308,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 294,
        "end": 308,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 298,
            "end": 307,
            "id": {
              "type": "Identifier",
              "start": 298,
              "end": 300,
              "decorators": [],
              "name": "x4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 303,
              "end": 307,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 305,
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "decorators": [],
                "name": "x",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 309,
      "end": 330,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 316,
        "end": 330,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 320,
            "end": 329,
            "id": {
              "type": "Identifier",
              "start": 320,
              "end": 322,
              "decorators": [],
              "name": "d4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 325,
              "end": 329,
              "object": {
                "type": "Identifier",
                "start": 325,
                "end": 327,
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 328,
                "end": 329,
                "decorators": [],
                "name": "d",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 331,
      "end": 356,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 338,
        "end": 356,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 342,
            "end": 355,
            "id": {
              "type": "Identifier",
              "start": 342,
              "end": 344,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 347,
              "end": 355,
              "callee": {
                "type": "MemberExpression",
                "start": 347,
                "end": 353,
                "object": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 349,
                  "decorators": [],
                  "name": "m4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 353,
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
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 358,
      "end": 522,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 365,
        "end": 522,
        "id": {
          "type": "Identifier",
          "start": 372,
          "end": 374,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 375,
          "end": 522,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 381,
              "end": 402,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 388,
                "end": 402,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 392,
                    "end": 401,
                    "id": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 394,
                      "decorators": [],
                      "name": "x2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 397,
                      "end": 401,
                      "object": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 399,
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 401,
                        "decorators": [],
                        "name": "x",
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
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 407,
              "end": 428,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 414,
                "end": 428,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 418,
                    "end": 427,
                    "id": {
                      "type": "Identifier",
                      "start": 418,
                      "end": 420,
                      "decorators": [],
                      "name": "d2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "MemberExpression",
                      "start": 423,
                      "end": 427,
                      "object": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 425,
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 426,
                        "end": 427,
                        "decorators": [],
                        "name": "d",
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
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 433,
              "end": 458,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 440,
                "end": 458,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 444,
                    "end": 457,
                    "id": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 446,
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "CallExpression",
                      "start": 449,
                      "end": 457,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 449,
                        "end": 455,
                        "object": {
                          "type": "Identifier",
                          "start": 449,
                          "end": 451,
                          "decorators": [],
                          "name": "m4",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 455,
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
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 464,
              "end": 478,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 468,
                  "end": 477,
                  "id": {
                    "type": "Identifier",
                    "start": 468,
                    "end": 470,
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 473,
                    "end": 477,
                    "object": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 475,
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 477,
                      "decorators": [],
                      "name": "x",
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
              "start": 483,
              "end": 497,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 487,
                  "end": 496,
                  "id": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 489,
                    "decorators": [],
                    "name": "d3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 492,
                    "end": 496,
                    "object": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 494,
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 495,
                      "end": 496,
                      "decorators": [],
                      "name": "d",
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
              "start": 502,
              "end": 520,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 506,
                  "end": 519,
                  "id": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 508,
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 511,
                    "end": 519,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 511,
                      "end": 517,
                      "object": {
                        "type": "Identifier",
                        "start": 511,
                        "end": 513,
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 517,
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
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 549,
      "end": 598,
      "id": {
        "type": "Identifier",
        "start": 556,
        "end": 562,
        "decorators": [],
        "name": "glo_m4",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 565,
        "end": 597,
        "expression": {
          "type": "Literal",
          "start": 573,
          "end": 596,
          "value": "./importDecl_require1",
          "raw": "\"./importDecl_require1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 599,
      "end": 634,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 606,
        "end": 634,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 610,
            "end": 633,
            "id": {
              "type": "Identifier",
              "start": 610,
              "end": 622,
              "decorators": [],
              "name": "useGlo_m4_d4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 625,
              "end": 633,
              "object": {
                "type": "Identifier",
                "start": 625,
                "end": 631,
                "decorators": [],
                "name": "glo_m4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 632,
                "end": 633,
                "decorators": [],
                "name": "d",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 635,
      "end": 674,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 642,
        "end": 674,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 646,
            "end": 673,
            "id": {
              "type": "Identifier",
              "start": 646,
              "end": 658,
              "decorators": [],
              "name": "useGlo_m4_f4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 661,
              "end": 673,
              "callee": {
                "type": "MemberExpression",
                "start": 661,
                "end": 671,
                "object": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 667,
                  "decorators": [],
                  "name": "glo_m4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 671,
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
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 720,
      "end": 773,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 737,
        "decorators": [],
        "name": "fncOnly_m4",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 740,
        "end": 772,
        "expression": {
          "type": "Literal",
          "start": 748,
          "end": 771,
          "value": "./importDecl_require2",
          "raw": "\"./importDecl_require2\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 774,
      "end": 821,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 781,
        "end": 821,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 785,
            "end": 820,
            "id": {
              "type": "Identifier",
              "start": 785,
              "end": 801,
              "decorators": [],
              "name": "useFncOnly_m4_f4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 804,
              "end": 820,
              "callee": {
                "type": "MemberExpression",
                "start": 804,
                "end": 818,
                "object": {
                  "type": "Identifier",
                  "start": 804,
                  "end": 814,
                  "decorators": [],
                  "name": "fncOnly_m4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 818,
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
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 862,
      "end": 915,
      "id": {
        "type": "Identifier",
        "start": 869,
        "end": 879,
        "decorators": [],
        "name": "private_m4",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 882,
        "end": 914,
        "expression": {
          "type": "Literal",
          "start": 890,
          "end": 913,
          "value": "./importDecl_require3",
          "raw": "\"./importDecl_require3\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 916,
      "end": 1035,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 923,
        "end": 1035,
        "id": {
          "type": "Identifier",
          "start": 930,
          "end": 946,
          "decorators": [],
          "name": "usePrivate_m4_m1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 947,
          "end": 1035,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 953,
              "end": 975,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 957,
                  "end": 974,
                  "id": {
                    "type": "Identifier",
                    "start": 957,
                    "end": 959,
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 962,
                    "end": 974,
                    "object": {
                      "type": "Identifier",
                      "start": 962,
                      "end": 972,
                      "decorators": [],
                      "name": "private_m4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 973,
                      "end": 974,
                      "decorators": [],
                      "name": "x",
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
              "start": 980,
              "end": 1002,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 984,
                  "end": 1001,
                  "id": {
                    "type": "Identifier",
                    "start": 984,
                    "end": 986,
                    "decorators": [],
                    "name": "d3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 989,
                    "end": 1001,
                    "object": {
                      "type": "Identifier",
                      "start": 989,
                      "end": 999,
                      "decorators": [],
                      "name": "private_m4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1000,
                      "end": 1001,
                      "decorators": [],
                      "name": "d",
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
              "start": 1007,
              "end": 1033,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1011,
                  "end": 1032,
                  "id": {
                    "type": "Identifier",
                    "start": 1011,
                    "end": 1013,
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 1016,
                    "end": 1032,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1016,
                      "end": 1030,
                      "object": {
                        "type": "Identifier",
                        "start": 1016,
                        "end": 1026,
                        "decorators": [],
                        "name": "private_m4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1027,
                        "end": 1030,
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
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 1066,
      "end": 1111,
      "id": {
        "type": "Identifier",
        "start": 1073,
        "end": 1075,
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 1078,
        "end": 1110,
        "expression": {
          "type": "Literal",
          "start": 1086,
          "end": 1109,
          "value": "./importDecl_require4",
          "raw": "\"./importDecl_require4\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1112,
      "end": 1137,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1119,
        "end": 1137,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1123,
            "end": 1136,
            "id": {
              "type": "Identifier",
              "start": 1123,
              "end": 1124,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1127,
              "end": 1136,
              "callee": {
                "type": "MemberExpression",
                "start": 1127,
                "end": 1134,
                "object": {
                  "type": "Identifier",
                  "start": 1127,
                  "end": 1129,
                  "decorators": [],
                  "name": "m5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1130,
                  "end": 1134,
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
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 1186,
      "end": 1242,
      "id": {
        "type": "Identifier",
        "start": 1193,
        "end": 1207,
        "decorators": [],
        "name": "multiImport_m4",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 1210,
        "end": 1241,
        "expression": {
          "type": "Literal",
          "start": 1218,
          "end": 1240,
          "value": "./importDecl_require",
          "raw": "\"./importDecl_require\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1256,
      "end": 1307,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1263,
        "end": 1307,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1267,
            "end": 1306,
            "id": {
              "type": "Identifier",
              "start": 1267,
              "end": 1287,
              "decorators": [],
              "name": "useMultiImport_m4_x4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 1290,
              "end": 1306,
              "object": {
                "type": "Identifier",
                "start": 1290,
                "end": 1304,
                "decorators": [],
                "name": "multiImport_m4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1305,
                "end": 1306,
                "decorators": [],
                "name": "x",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1308,
      "end": 1359,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1315,
        "end": 1359,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1319,
            "end": 1358,
            "id": {
              "type": "Identifier",
              "start": 1319,
              "end": 1339,
              "decorators": [],
              "name": "useMultiImport_m4_d4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 1342,
              "end": 1358,
              "object": {
                "type": "Identifier",
                "start": 1342,
                "end": 1356,
                "decorators": [],
                "name": "multiImport_m4",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1357,
                "end": 1358,
                "decorators": [],
                "name": "d",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1360,
      "end": 1415,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1367,
        "end": 1415,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1371,
            "end": 1414,
            "id": {
              "type": "Identifier",
              "start": 1371,
              "end": 1391,
              "decorators": [],
              "name": "useMultiImport_m4_f4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1394,
              "end": 1414,
              "callee": {
                "type": "MemberExpression",
                "start": 1394,
                "end": 1412,
                "object": {
                  "type": "Identifier",
                  "start": 1394,
                  "end": 1408,
                  "decorators": [],
                  "name": "multiImport_m4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1409,
                  "end": 1412,
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
            "definite": false
          }
        ],
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
