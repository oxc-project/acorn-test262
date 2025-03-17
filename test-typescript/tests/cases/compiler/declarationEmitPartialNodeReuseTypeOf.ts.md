__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 36,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 36,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "name": "nImported",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 25,
              "end": 36,
              "value": "nImported",
              "raw": "\"nImported\""
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 79,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 79,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 79,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 62,
              "name": "nNotImported",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 65,
              "end": 79,
              "value": "nNotImported",
              "raw": "\"nNotImported\""
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 94,
            "name": "nPrivate",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 97,
            "end": 106,
            "value": "private",
            "raw": "\"private\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 278,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 278,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 120,
            "end": 278,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 124,
              "end": 278,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 145,
                  "name": "p1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 127,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 129,
                      "end": 145,
                      "exprName": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 145,
                        "name": "nImported",
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
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 170,
                  "name": "p2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 170,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 151,
                      "end": 170,
                      "exprName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 170,
                        "name": "nNotImported",
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
                {
                  "type": "Identifier",
                  "start": 172,
                  "end": 191,
                  "name": "p3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 174,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 176,
                      "end": 191,
                      "exprName": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 191,
                        "name": "nPrivate",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "TSAsExpression",
                "start": 196,
                "end": 278,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 196,
                  "end": 201,
                  "expression": {
                    "type": "Literal",
                    "start": 196,
                    "end": 200,
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 205,
                  "end": 278,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 207,
                      "end": 229,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 210,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 210,
                        "end": 228,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 212,
                          "end": 228,
                          "exprName": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 228,
                            "name": "nImported",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 230,
                      "end": 251,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 233,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 233,
                        "end": 250,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 235,
                          "end": 250,
                          "exprName": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 250,
                            "name": "nPrivate",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 252,
                      "end": 276,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 255,
                        "name": "baz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 255,
                        "end": 276,
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "start": 257,
                          "end": 276,
                          "exprName": {
                            "type": "Identifier",
                            "start": 264,
                            "end": 276,
                            "name": "nNotImported",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
  "end": 79,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "name": "nImported",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "name": "nImported",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 34,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 54,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 54,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 54,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 78,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 77,
        "callee": {
          "type": "MemberExpression",
          "start": 55,
          "end": 66,
          "object": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "name": "nImported",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
  "end": 47,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 46,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 46,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 43,
              "end": 46,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "o",
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
        "kind": "const",
        "declare": false
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
