__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 291,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 49,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 48,
        "raw": "\"../index.js\"",
        "value": "../index.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 27,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 50,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 60,
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 63,
        "end": 85,
        "expression": {
          "type": "Literal",
          "start": 71,
          "end": 84,
          "raw": "\"../index.js\"",
          "value": "../index.js"
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 122,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 109,
        "end": 121,
        "raw": "\"./index.js\"",
        "value": "./index.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 95,
          "end": 102,
          "imported": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 100,
            "end": 102,
            "decorators": [],
            "name": "_f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 123,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 134,
        "decorators": [],
        "name": "mod2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 137,
        "end": 158,
        "expression": {
          "type": "Literal",
          "start": 145,
          "end": 157,
          "raw": "\"./index.js\"",
          "value": "./index.js"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 160,
      "end": 291,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 167,
        "end": 291,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 186,
          "end": 291,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 192,
              "end": 234,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 198,
                  "end": 233,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 202,
                    "decorators": [],
                    "name": "mod3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 205,
                    "end": 233,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 211,
                      "end": 233,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 219,
                        "end": 232,
                        "raw": "\"../index.js\"",
                        "value": "../index.js"
                      },
                      "phase": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "VariableDeclaration",
              "start": 239,
              "end": 280,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 245,
                  "end": 279,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 249,
                    "decorators": [],
                    "name": "mod4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 252,
                    "end": 279,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 258,
                      "end": 279,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 266,
                        "end": 278,
                        "raw": "\"./index.js\"",
                        "value": "./index.js"
                      },
                      "phase": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 285,
              "end": 289,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 285,
                "end": 288,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 286,
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 19,
  "end": 318,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 54,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 53,
        "raw": "\"./index.js\"",
        "value": "./index.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 27,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "decorators": [],
            "name": "_h",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 55,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 68,
        "end": 89,
        "expression": {
          "type": "Literal",
          "start": 76,
          "end": 88,
          "raw": "\"./index.js\"",
          "value": "./index.js"
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 91,
      "end": 130,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 107,
        "end": 129,
        "raw": "\"./subfolder/index.js\"",
        "value": "./subfolder/index.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 99,
          "end": 100,
          "imported": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 131,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 142,
        "decorators": [],
        "name": "mod2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 145,
        "end": 176,
        "expression": {
          "type": "Literal",
          "start": 153,
          "end": 175,
          "raw": "\"./subfolder/index.js\"",
          "value": "./subfolder/index.js"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 178,
      "end": 318,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 185,
        "end": 318,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 204,
          "end": 318,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 210,
              "end": 251,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 216,
                  "end": 250,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 220,
                    "decorators": [],
                    "name": "mod3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 223,
                    "end": 250,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 229,
                      "end": 250,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 237,
                        "end": 249,
                        "raw": "\"./index.js\"",
                        "value": "./index.js"
                      },
                      "phase": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "VariableDeclaration",
              "start": 256,
              "end": 307,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 262,
                  "end": 306,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 266,
                    "decorators": [],
                    "name": "mod4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 269,
                    "end": 306,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 275,
                      "end": 306,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 283,
                        "end": 305,
                        "raw": "\"./subfolder/index.js\"",
                        "value": "./subfolder/index.js"
                      },
                      "phase": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 312,
              "end": 316,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 312,
                "end": 315,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 200,
          "end": 201,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
