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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "importKind": "value",
          "start": 27,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "../index.js",
        "raw": "\"../index.js\"",
        "start": 35,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 49
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 60
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "../index.js",
          "raw": "\"../index.js\"",
          "start": 71,
          "end": 84
        },
        "start": 63,
        "end": 85
      },
      "importKind": "value",
      "start": 50,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_f",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 102
          },
          "importKind": "value",
          "start": 95,
          "end": 102
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "\"./index.js\"",
        "start": 109,
        "end": 121
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 122
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod2",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 134
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./index.js",
          "raw": "\"./index.js\"",
          "start": 145,
          "end": 157
        },
        "start": 137,
        "end": 158
      },
      "importKind": "value",
      "start": 123,
      "end": 159
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 183
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 202
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "../index.js",
                        "raw": "\"../index.js\"",
                        "start": 219,
                        "end": 232
                      },
                      "options": null,
                      "phase": null,
                      "start": 211,
                      "end": 233
                    },
                    "start": 205,
                    "end": 233
                  },
                  "definite": false,
                  "start": 198,
                  "end": 233
                }
              ],
              "declare": false,
              "start": 192,
              "end": 234
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
                    "name": "mod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 245,
                    "end": 249
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./index.js",
                        "raw": "\"./index.js\"",
                        "start": 266,
                        "end": 278
                      },
                      "options": null,
                      "phase": null,
                      "start": 258,
                      "end": 279
                    },
                    "start": 252,
                    "end": 279
                  },
                  "definite": false,
                  "start": 245,
                  "end": 279
                }
              ],
              "declare": false,
              "start": 239,
              "end": 280
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "h",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 286
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 285,
                "end": 288
              },
              "directive": null,
              "start": 285,
              "end": 289
            }
          ],
          "start": 186,
          "end": 291
        },
        "expression": false,
        "start": 167,
        "end": 291
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 160,
      "end": 291
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 291
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_h",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 34
          },
          "importKind": "value",
          "start": 27,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "\"./index.js\"",
        "start": 41,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./index.js",
          "raw": "\"./index.js\"",
          "start": 76,
          "end": 88
        },
        "start": 68,
        "end": 89
      },
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "importKind": "value",
          "start": 99,
          "end": 100
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./subfolder/index.js",
        "raw": "\"./subfolder/index.js\"",
        "start": 107,
        "end": 129
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 130
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod2",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 142
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./subfolder/index.js",
          "raw": "\"./subfolder/index.js\"",
          "start": 153,
          "end": 175
        },
        "start": 145,
        "end": 176
      },
      "importKind": "value",
      "start": 131,
      "end": 177
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 201
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 220
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./index.js",
                        "raw": "\"./index.js\"",
                        "start": 237,
                        "end": 249
                      },
                      "options": null,
                      "phase": null,
                      "start": 229,
                      "end": 250
                    },
                    "start": 223,
                    "end": 250
                  },
                  "definite": false,
                  "start": 216,
                  "end": 250
                }
              ],
              "declare": false,
              "start": 210,
              "end": 251
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
                    "name": "mod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 266
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "source": {
                        "type": "Literal",
                        "value": "./subfolder/index.js",
                        "raw": "\"./subfolder/index.js\"",
                        "start": 283,
                        "end": 305
                      },
                      "options": null,
                      "phase": null,
                      "start": 275,
                      "end": 306
                    },
                    "start": 269,
                    "end": 306
                  },
                  "definite": false,
                  "start": 262,
                  "end": 306
                }
              ],
              "declare": false,
              "start": 256,
              "end": 307
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 312,
                "end": 315
              },
              "directive": null,
              "start": 312,
              "end": 316
            }
          ],
          "start": 204,
          "end": 318
        },
        "expression": false,
        "start": 185,
        "end": 318
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 178,
      "end": 318
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 318
}
```
