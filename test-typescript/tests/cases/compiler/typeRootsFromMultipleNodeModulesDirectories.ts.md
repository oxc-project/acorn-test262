/node_modules/@types/dopey/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 52,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 50,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 50,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 49,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 49,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"xyz\"",
        "value": "xyz"
      }
    }
  ],
  "sourceType": "module"
}
```
/foo/node_modules/@types/grumpy/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 50,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 50,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 49,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 49,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"pdq\"",
        "value": "pdq"
      }
    }
  ],
  "sourceType": "module"
}
```
/foo/node_modules/@types/sneezy/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 52,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 50,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 50,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 49,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 49,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"abc\"",
        "value": "abc"
      }
    }
  ],
  "sourceType": "module"
}
```
/foo/bar/a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
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
        "raw": "\"xyz\"",
        "value": "xyz"
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
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 49,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 43,
        "end": 48,
        "raw": "\"pdq\"",
        "value": "pdq"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 35,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 50,
      "end": 74,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 73,
        "raw": "\"abc\"",
        "value": "abc"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 59,
          "end": 60,
          "imported": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 85,
      "expression": {
        "type": "BinaryExpression",
        "start": 75,
        "end": 84,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 75,
          "end": 80,
          "operator": "+",
          "left": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "z",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
