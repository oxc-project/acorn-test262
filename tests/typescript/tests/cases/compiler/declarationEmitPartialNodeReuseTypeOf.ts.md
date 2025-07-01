__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "nImported",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "init": {
              "type": "Literal",
              "value": "nImported",
              "raw": "\"nImported\"",
              "start": 25,
              "end": 36
            },
            "definite": false,
            "start": 13,
            "end": 36
          }
        ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "nNotImported",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 62
            },
            "init": {
              "type": "Literal",
              "value": "nNotImported",
              "raw": "\"nNotImported\"",
              "start": 65,
              "end": 79
            },
            "definite": false,
            "start": 50,
            "end": 79
          }
        ],
        "declare": false,
        "start": 44,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nPrivate",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 94
          },
          "init": {
            "type": "Literal",
            "value": "private",
            "raw": "\"private\"",
            "start": 97,
            "end": 106
          },
          "definite": false,
          "start": 86,
          "end": 106
        }
      ],
      "declare": false,
      "start": 80,
      "end": 106
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nImported",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 136,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 145
                    },
                    "start": 127,
                    "end": 145
                  },
                  "start": 125,
                  "end": 145
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nNotImported",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 170
                      },
                      "typeArguments": null,
                      "start": 151,
                      "end": 170
                    },
                    "start": 149,
                    "end": 170
                  },
                  "start": 147,
                  "end": 170
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nPrivate",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 191
                      },
                      "typeArguments": null,
                      "start": 176,
                      "end": 191
                    },
                    "start": 174,
                    "end": 191
                  },
                  "start": 172,
                  "end": 191
                }
              ],
              "returnType": null,
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 196,
                    "end": 200
                  },
                  "start": 196,
                  "end": 201
                },
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 210
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nImported",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 228
                          },
                          "typeArguments": null,
                          "start": 212,
                          "end": 228
                        },
                        "start": 210,
                        "end": 228
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 207,
                      "end": 229
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 233
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nPrivate",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 250
                          },
                          "typeArguments": null,
                          "start": 235,
                          "end": 250
                        },
                        "start": 233,
                        "end": 250
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 230,
                      "end": 251
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 252,
                        "end": 255
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nNotImported",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 264,
                            "end": 276
                          },
                          "typeArguments": null,
                          "start": 257,
                          "end": 276
                        },
                        "start": 255,
                        "end": 276
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 252,
                      "end": 276
                    }
                  ],
                  "start": 205,
                  "end": 278
                },
                "start": 196,
                "end": 278
              },
              "id": null,
              "generator": false,
              "start": 124,
              "end": 278
            },
            "definite": false,
            "start": 120,
            "end": 278
          }
        ],
        "declare": false,
        "start": 114,
        "end": 278
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 278
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 279
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "nImported",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nImported",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 21
          },
          "importKind": "value",
          "start": 12,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 29,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 50
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "definite": false,
            "start": 49,
            "end": 54
          }
        ],
        "declare": false,
        "start": 43,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 36,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 55,
          "end": 66
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nImported",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 76
          }
        ],
        "optional": false,
        "start": 55,
        "end": 77
      },
      "directive": null,
      "start": 55,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 79
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 19,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "optional": false,
              "computed": false,
              "start": 43,
              "end": 46
            },
            "definite": false,
            "start": 39,
            "end": 46
          }
        ],
        "declare": false,
        "start": 33,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 26,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
}
```
