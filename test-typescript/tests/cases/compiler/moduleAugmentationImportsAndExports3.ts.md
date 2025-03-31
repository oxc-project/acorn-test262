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
  "end": 333,
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
      "type": "ExpressionStatement",
      "start": 25,
      "end": 76,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 76,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 25,
          "end": 40,
          "object": {
            "type": "MemberExpression",
            "start": 25,
            "end": 36,
            "object": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 27,
              "end": 36,
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
            "start": 37,
            "end": 40,
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
          "start": 43,
          "end": 76,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 55,
            "end": 76,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 57,
                "end": 74,
                "argument": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 73,
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
      "type": "TSModuleDeclaration",
      "start": 78,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 155,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 96,
            "end": 122,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 103,
              "end": 122,
              "id": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "name": "Ifc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 117,
                "end": 122,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 119,
                    "end": 120,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 120,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
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
            "start": 127,
            "end": 153,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 134,
              "end": 153,
              "id": {
                "type": "Identifier",
                "start": 144,
                "end": 147,
                "name": "Cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 148,
                "end": 153,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 150,
                    "end": 151,
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
                    "typeAnnotation": null,
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
    {
      "type": "TSModuleDeclaration",
      "start": 157,
      "end": 332,
      "id": {
        "type": "Literal",
        "start": 172,
        "end": 178,
        "value": "./f1",
        "raw": "\"./f1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 179,
        "end": 332,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 185,
            "end": 208,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 193,
                "end": 194,
                "imported": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "local": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
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
              "start": 201,
              "end": 207,
              "value": "./f2",
              "raw": "\"./f2\""
            },
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 213,
            "end": 230,
            "id": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 224,
              "end": 229,
              "left": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 226,
                "end": 229,
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
            "start": 235,
            "end": 252,
            "id": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 246,
              "end": 251,
              "left": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "name": "N",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 248,
                "end": 251,
                "name": "Cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 257,
            "end": 330,
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 269,
              "end": 330,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 279,
                  "end": 288,
                  "key": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 282,
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
                    "start": 284,
                    "end": 287,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 286,
                      "end": 287,
                      "typeName": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 287,
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
                  "start": 297,
                  "end": 306,
                  "key": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 300,
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
                    "start": 302,
                    "end": 305,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 304,
                      "end": 305,
                      "typeName": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 305,
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
                  "start": 315,
                  "end": 324,
                  "key": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 318,
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
                    "start": 320,
                    "end": 323,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 323,
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 323,
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
  "end": 68,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
