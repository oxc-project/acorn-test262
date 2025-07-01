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
        "start": 15,
        "end": 19
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
                            "start": 48,
                            "end": 54
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
                                  "start": 61,
                                  "end": 67
                                },
                                "start": 59,
                                "end": 67
                              },
                              "start": 55,
                              "end": 67
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
                                  "start": 76,
                                  "end": 82
                                },
                                "start": 74,
                                "end": 82
                              },
                              "start": 69,
                              "end": 82
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 85,
                              "end": 91
                            },
                            "start": 83,
                            "end": 91
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 48,
                          "end": 92
                        }
                      ],
                      "start": 38,
                      "end": 98
                    },
                    "start": 36,
                    "end": 98
                  },
                  "start": 30,
                  "end": 98
                },
                "init": null,
                "definite": false,
                "start": 30,
                "end": 98
              }
            ],
            "declare": false,
            "start": 26,
            "end": 99
          }
        ],
        "start": 20,
        "end": 101
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 101
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "core-js/fn/string/repeat",
        "raw": "\"core-js/fn/string/repeat\"",
        "start": 117,
        "end": 143
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
                            "start": 169,
                            "end": 173
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "String",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 180
                          },
                          "start": 169,
                          "end": 180
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "repeat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 187
                        },
                        "start": 169,
                        "end": 187
                      },
                      "typeArguments": null,
                      "start": 162,
                      "end": 187
                    },
                    "start": 160,
                    "end": 187
                  },
                  "start": 154,
                  "end": 187
                },
                "init": null,
                "definite": false,
                "start": 154,
                "end": 187
              }
            ],
            "declare": false,
            "start": 150,
            "end": 188
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "repeat",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 214
            },
            "exportKind": "value",
            "start": 193,
            "end": 215
          }
        ],
        "start": 144,
        "end": 217
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 102,
      "end": 217
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 217
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
