__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 20,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "value": "A",
              "raw": "\"A\""
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
      "start": 21,
      "end": 42,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 28,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 34,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "name": "poz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 40,
              "end": 41,
              "value": 1,
              "raw": "1"
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
      "start": 43,
      "end": 65,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 50,
        "end": 65,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "name": "neg",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "UnaryExpression",
              "start": 62,
              "end": 64,
              "operator": "-",
              "prefix": true,
              "argument": {
                "type": "Literal",
                "start": 63,
                "end": 64,
                "value": 1,
                "raw": "1"
              }
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
      "start": 66,
      "end": 156,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 73,
        "end": 156,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 79,
            "end": 156,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 83,
              "end": 156,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
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
                    "value": null,
                    "raw": "null"
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 102,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 103,
                        "end": 111,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 105,
                          "end": 111
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 113,
                      "end": 125,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 116,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 116,
                        "end": 124,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 118,
                          "end": 124
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 126,
                      "end": 140,
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 130,
                        "name": "poz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 131,
                        "end": 139,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 133,
                          "end": 139
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 141,
                      "end": 154,
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 145,
                        "name": "neg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 146,
                        "end": 154,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 148,
                          "end": 154
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
  "end": 43,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
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
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 43,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 43,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
