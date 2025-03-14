__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "decorators": [],
              "name": "other",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 21,
              "end": 24,
              "raw": "123",
              "value": 123
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 26,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 61,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 61,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 37,
                "end": 61,
                "exprName": {
                  "type": "TSImportType",
                  "start": 44,
                  "end": 61,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 51,
                    "end": 60,
                    "literal": {
                      "type": "Literal",
                      "start": 51,
                      "end": 60,
                      "raw": "'./other'",
                      "value": "./other"
                    }
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 64,
            "end": 75,
            "expression": {
              "type": "Literal",
              "start": 64,
              "end": 68,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 72,
              "end": 75
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 207,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 207,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 144,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 143,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 107,
                  "end": 143,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 115,
                      "end": 142,
                      "raw": "'../outside-of-rootdir/foo'",
                      "value": "../outside-of-rootdir/foo"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 114,
                    "decorators": [],
                    "name": "require",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 149,
            "end": 205,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 204,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 155,
                  "end": 183,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 162,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "decorators": [],
                        "name": "other",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "decorators": [],
                        "name": "other",
                        "optional": false
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 166,
                      "end": 183,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 168,
                          "end": 181,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 173,
                            "decorators": [],
                            "name": "other",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 173,
                            "end": 181,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 175,
                              "end": 181
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "start": 186,
                  "end": 204,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 194,
                      "end": 203,
                      "raw": "'./other'",
                      "value": "./other"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 193,
                    "decorators": [],
                    "name": "require",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
