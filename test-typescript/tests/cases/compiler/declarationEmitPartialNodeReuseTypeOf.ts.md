a.ts
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 36,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 36,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "nImported",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 25,
              "end": 36,
              "raw": "\"nImported\"",
              "value": "nImported"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 79,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 79,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 79,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 62,
              "decorators": [],
              "name": "nNotImported",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 65,
              "end": 79,
              "raw": "\"nNotImported\"",
              "value": "nNotImported"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 94,
            "decorators": [],
            "name": "nPrivate",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 97,
            "end": 106,
            "raw": "\"private\"",
            "value": "private"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 278,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 114,
        "end": 278,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 120,
            "end": 278,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 124,
              "end": 278,
              "async": false,
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
                    "raw": "null",
                    "value": null
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
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 210,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "decorators": [],
                            "name": "nImported",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 230,
                      "end": 251,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 233,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "decorators": [],
                            "name": "nPrivate",
                            "optional": false
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 252,
                      "end": 276,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 252,
                        "end": 255,
                        "decorators": [],
                        "name": "baz",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "decorators": [],
                            "name": "nNotImported",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 145,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
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
                        "decorators": [],
                        "name": "nImported",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 170,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
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
                        "decorators": [],
                        "name": "nNotImported",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 172,
                  "end": 191,
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
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
                        "decorators": [],
                        "name": "nPrivate",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
b.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 34,
        "raw": "\"./a\"",
        "value": "./a"
      },
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
            "name": "o",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "o",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "nImported",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "nImported",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 36,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 43,
        "end": 54,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 49,
            "end": 54,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "o",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 78,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 77,
        "arguments": [
          {
            "type": "Identifier",
            "start": 67,
            "end": 76,
            "decorators": [],
            "name": "nImported",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 55,
          "end": 66,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 63,
            "end": 66,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
c.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 46,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 46,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 43,
              "end": 46,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "o",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
