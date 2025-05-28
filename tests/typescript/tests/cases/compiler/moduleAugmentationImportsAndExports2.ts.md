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
          "end": 33,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 31,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
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
  "end": 396,
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
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
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
        "start": 16,
        "end": 22,
        "value": "./f1",
        "raw": "\"./f1\""
      },
      "phase": null,
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 27,
              "end": 36,
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
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 43,
          "end": 76,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
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
      "start": 78,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "Ifc",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
      "end": 395,
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
        "end": 395,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "local": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
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
              "start": 201,
              "end": 207,
              "value": "./f2",
              "raw": "\"./f2\""
            },
            "phase": null,
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 213,
            "end": 236,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 221,
                "end": 222,
                "local": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 222,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exported": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 222,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "exportKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 229,
              "end": 235,
              "value": "./f2",
              "raw": "\"./f2\""
            },
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 241,
            "end": 258,
            "id": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 252,
              "end": 257,
              "left": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 254,
                "end": 257,
                "decorators": [],
                "name": "Ifc",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 263,
            "end": 280,
            "id": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 274,
              "end": 279,
              "left": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 276,
                "end": 279,
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 320,
            "end": 393,
            "id": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 332,
              "end": 393,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 342,
                  "end": 351,
                  "key": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 345,
                    "decorators": [],
                    "name": "foo",
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
                    "start": 347,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 349,
                      "end": 350,
                      "typeName": {
                        "type": "Identifier",
                        "start": 349,
                        "end": 350,
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
                },
                {
                  "type": "TSMethodSignature",
                  "start": 360,
                  "end": 369,
                  "key": {
                    "type": "Identifier",
                    "start": 360,
                    "end": 363,
                    "decorators": [],
                    "name": "bar",
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
                    "start": 365,
                    "end": 368,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 367,
                      "end": 368,
                      "typeName": {
                        "type": "Identifier",
                        "start": 367,
                        "end": 368,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
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
                  "start": 378,
                  "end": 387,
                  "key": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 381,
                    "decorators": [],
                    "name": "baz",
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
                    "start": 383,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 385,
                      "end": 386,
                      "typeName": {
                        "type": "Identifier",
                        "start": 385,
                        "end": 386,
                        "decorators": [],
                        "name": "C",
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
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
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
        "start": 16,
        "end": 22,
        "value": "./f1",
        "raw": "\"./f1\""
      },
      "phase": null,
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 49,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "decorators": [],
            "name": "a",
            "optional": false,
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
      "start": 50,
      "end": 68,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 63,
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
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "n",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
