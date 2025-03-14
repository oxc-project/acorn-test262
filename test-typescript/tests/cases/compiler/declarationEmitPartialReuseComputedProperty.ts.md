a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 20,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "raw": "\"A\"",
              "value": "A"
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
      "start": 21,
      "end": 42,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 28,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 34,
            "end": 41,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "decorators": [],
              "name": "poz",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 40,
              "end": 41,
              "raw": "1",
              "value": 1
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
      "start": 43,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 50,
        "end": 65,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 64,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "decorators": [],
              "name": "neg",
              "optional": false
            },
            "init": {
              "type": "UnaryExpression",
              "start": 62,
              "end": 64,
              "argument": {
                "type": "Literal",
                "start": 63,
                "end": 64,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
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
      "start": 66,
      "end": 156,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 73,
        "end": 156,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 79,
            "end": 156,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "o",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 83,
              "end": 156,
              "async": false,
              "body": {
                "type": "TSAsExpression",
                "start": 89,
                "end": 156,
                "expression": {
                  "type": "TSNonNullExpression",
                  "start": 89,
                  "end": 94,
                  "expression": {
                    "type": "Literal",
                    "start": 89,
                    "end": 93,
                    "raw": "null",
                    "value": null
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 98,
                  "end": 156,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 100,
                      "end": 112,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 103,
                        "end": 111,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 105,
                          "end": 111
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 113,
                      "end": 125,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 116,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 116,
                        "end": 124,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 118,
                          "end": 124
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 126,
                      "end": 140,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 130,
                        "decorators": [],
                        "name": "poz",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 131,
                        "end": 139,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 133,
                          "end": 139
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 141,
                      "end": 154,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 145,
                        "decorators": [],
                        "name": "neg",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 146,
                        "end": 154,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 148,
                          "end": 154
                        }
                      }
                    }
                  ]
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
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
  "end": 43,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
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
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 43,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 43,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 43,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
    }
  ],
  "sourceType": "module"
}
```
