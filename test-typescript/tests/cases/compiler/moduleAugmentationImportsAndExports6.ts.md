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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 33,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 33,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 31,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 30,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 24,
                  "end": 30
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 346,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 22,
        "value": "./f1",
        "raw": "\"./f1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 24,
      "end": 47,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 32,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 46,
        "value": "./f2",
        "raw": "\"./f2\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 100,
      "expression": {
        "type": "AssignmentExpression",
        "start": 49,
        "end": 100,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 49,
          "end": 64,
          "object": {
            "type": "MemberExpression",
            "start": 49,
            "end": 60,
            "object": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 51,
              "end": 60,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 61,
            "end": 64,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 67,
          "end": 100,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 79,
            "end": 100,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 81,
                "end": 98,
                "argument": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 97,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 204,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 109,
        "end": 204,
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 120,
          "name": "N",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 121,
          "end": 204,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 127,
              "end": 162,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 134,
                "end": 162,
                "id": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 147,
                  "name": "Ifc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 148,
                  "end": 162,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 150,
                      "end": 160,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 151,
                        "end": 159,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 153,
                          "end": 159
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 167,
              "end": 202,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 174,
                "end": 202,
                "id": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 187,
                  "name": "Cls",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 188,
                  "end": 202,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 190,
                      "end": 200,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 191,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 191,
                        "end": 199,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 193,
                          "end": 199
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 205,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 213,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 216,
        "end": 221,
        "left": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
          "name": "N",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 218,
          "end": 221,
          "name": "Ifc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 223,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 231,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 234,
        "end": 239,
        "left": {
          "type": "Identifier",
          "start": 234,
          "end": 235,
          "name": "N",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 236,
          "end": 239,
          "name": "Cls",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 242,
      "end": 345,
      "id": {
        "type": "Literal",
        "start": 257,
        "end": 263,
        "value": "./f1",
        "raw": "\"./f1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 264,
        "end": 345,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 270,
            "end": 343,
            "id": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 282,
              "end": 343,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 292,
                  "end": 301,
                  "key": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 295,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 297,
                    "end": 300,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 299,
                      "end": 300,
                      "typeName": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 300,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 310,
                  "end": 319,
                  "key": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 313,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 315,
                    "end": 318,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 317,
                      "end": 318,
                      "typeName": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 318,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 328,
                  "end": 337,
                  "key": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 331,
                    "name": "baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 336,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 335,
                      "end": 336,
                      "typeName": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 336,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 22,
        "value": "./f1",
        "raw": "\"./f1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 24,
      "end": 38,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 37,
        "value": "./f3",
        "raw": "\"./f3\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 58,
            "end": 67,
            "object": {
              "type": "CallExpression",
              "start": 58,
              "end": 65,
              "callee": {
                "type": "MemberExpression",
                "start": 58,
                "end": 63,
                "object": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 63,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 86,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 77,
            "end": 86,
            "object": {
              "type": "CallExpression",
              "start": 77,
              "end": 84,
              "callee": {
                "type": "MemberExpression",
                "start": 77,
                "end": 82,
                "object": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 82,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 96,
            "end": 105,
            "object": {
              "type": "CallExpression",
              "start": 96,
              "end": 103,
              "callee": {
                "type": "MemberExpression",
                "start": 96,
                "end": 101,
                "object": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 101,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
