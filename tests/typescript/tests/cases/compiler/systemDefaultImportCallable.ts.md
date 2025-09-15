__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "core",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "repeat",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 51,
                            "end": 57
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "text",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 64,
                                  "end": 70
                                },
                                "start": 62,
                                "end": 70
                              },
                              "start": 58,
                              "end": 70
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "count",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 79,
                                  "end": 85
                                },
                                "start": 77,
                                "end": 85
                              },
                              "start": 72,
                              "end": 85
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 88,
                              "end": 94
                            },
                            "start": 86,
                            "end": 94
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 51,
                          "end": 95
                        }
                      ],
                      "start": 41,
                      "end": 101
                    },
                    "start": 39,
                    "end": 101
                  },
                  "start": 33,
                  "end": 101
                },
                "init": null,
                "definite": false,
                "start": 33,
                "end": 101
              }
            ],
            "declare": false,
            "start": 29,
            "end": 102
          }
        ],
        "start": 23,
        "end": 104
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 104
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "core-js/fn/string/repeat",
        "raw": "\"core-js/fn/string/repeat\"",
        "start": 120,
        "end": 146
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "repeat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "core",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 172,
                            "end": 176
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "String",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 177,
                            "end": 183
                          },
                          "start": 172,
                          "end": 183
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "repeat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 190
                        },
                        "start": 172,
                        "end": 190
                      },
                      "typeArguments": null,
                      "start": 165,
                      "end": 190
                    },
                    "start": 163,
                    "end": 190
                  },
                  "start": 157,
                  "end": 190
                },
                "init": null,
                "definite": false,
                "start": 157,
                "end": 190
              }
            ],
            "declare": false,
            "start": 153,
            "end": 191
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "repeat",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 217
            },
            "exportKind": "value",
            "start": 196,
            "end": 218
          }
        ],
        "start": 147,
        "end": 220
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 105,
      "end": 220
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 220
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "repeat",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "core-js/fn/string/repeat",
        "raw": "\"core-js/fn/string/repeat\"",
        "start": 19,
        "end": 45
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 46
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
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              },
              "start": 55,
              "end": 63
            },
            "start": 54,
            "end": 63
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "repeat",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 72
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 81
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 73,
                      "end": 83
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUTCString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 95
                    },
                    "optional": false,
                    "computed": false,
                    "start": 73,
                    "end": 95
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 73,
                  "end": 97
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": " ",
                  "raw": "\" \"",
                  "start": 100,
                  "end": 103
                },
                "start": 73,
                "end": 103
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 105,
                "end": 106
              }
            ],
            "optional": false,
            "start": 66,
            "end": 107
          },
          "definite": false,
          "start": 54,
          "end": 107
        }
      ],
      "declare": false,
      "start": 48,
      "end": 108
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 108
}
```
