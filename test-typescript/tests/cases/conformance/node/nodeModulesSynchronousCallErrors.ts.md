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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 27,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 48,
        "value": "../index.js",
        "raw": "\"../index.js\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 50,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 60,
        "name": "mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 63,
        "end": 85,
        "expression": {
          "type": "Literal",
          "start": 71,
          "end": 84,
          "value": "../index.js",
          "raw": "\"../index.js\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 122,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 95,
          "end": 102,
          "imported": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 100,
            "end": 102,
            "name": "_f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 109,
        "end": 121,
        "value": "./index.js",
        "raw": "\"./index.js\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 123,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 134,
        "name": "mod2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 137,
        "end": 158,
        "expression": {
          "type": "Literal",
          "start": 145,
          "end": 157,
          "value": "./index.js",
          "raw": "\"./index.js\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 160,
      "end": 291,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 167,
        "end": 291,
        "id": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [],
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
                  "id": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 202,
                    "name": "mod3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 205,
                    "end": 233,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 211,
                      "end": 233,
                      "source": {
                        "type": "Literal",
                        "start": 219,
                        "end": 232,
                        "value": "../index.js",
                        "raw": "\"../index.js\""
                      },
                      "options": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
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
                  "id": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 249,
                    "name": "mod4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 252,
                    "end": 279,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 258,
                      "end": 279,
                      "source": {
                        "type": "Literal",
                        "start": 266,
                        "end": 278,
                        "value": "./index.js",
                        "raw": "\"./index.js\""
                      },
                      "options": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 285,
              "end": 289,
              "expression": {
                "type": "CallExpression",
                "start": 285,
                "end": 288,
                "callee": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 286,
                  "name": "h",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
  "start": 19,
  "end": 318,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 27,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "name": "_h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 53,
        "value": "./index.js",
        "raw": "\"./index.js\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 55,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "name": "mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 68,
        "end": 89,
        "expression": {
          "type": "Literal",
          "start": 76,
          "end": 88,
          "value": "./index.js",
          "raw": "\"./index.js\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 91,
      "end": 130,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 99,
          "end": 100,
          "imported": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 107,
        "end": 129,
        "value": "./subfolder/index.js",
        "raw": "\"./subfolder/index.js\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 131,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 142,
        "name": "mod2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 145,
        "end": 176,
        "expression": {
          "type": "Literal",
          "start": 153,
          "end": 175,
          "value": "./subfolder/index.js",
          "raw": "\"./subfolder/index.js\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 178,
      "end": 318,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 185,
        "end": 318,
        "id": {
          "type": "Identifier",
          "start": 200,
          "end": 201,
          "name": "h",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": true,
        "params": [],
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
                  "id": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 220,
                    "name": "mod3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 223,
                    "end": 250,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 229,
                      "end": 250,
                      "source": {
                        "type": "Literal",
                        "start": 237,
                        "end": 249,
                        "value": "./index.js",
                        "raw": "\"./index.js\""
                      },
                      "options": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
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
                  "id": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 266,
                    "name": "mod4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "start": 269,
                    "end": 306,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 275,
                      "end": 306,
                      "source": {
                        "type": "Literal",
                        "start": 283,
                        "end": 305,
                        "value": "./subfolder/index.js",
                        "raw": "\"./subfolder/index.js\""
                      },
                      "options": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "ExpressionStatement",
              "start": 312,
              "end": 316,
              "expression": {
                "type": "CallExpression",
                "start": 312,
                "end": 315,
                "callee": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
