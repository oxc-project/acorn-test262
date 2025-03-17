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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "name": "other",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 21,
              "end": 24,
              "value": 123,
              "raw": "123"
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 26,
            "name": "require",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 26,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 61,
            "name": "a",
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
                      "value": "./other",
                      "raw": "'./other'"
                    }
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": null
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 64,
            "end": 75,
            "expression": {
              "type": "Literal",
              "start": 64,
              "end": 68,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 72,
              "end": 75
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 88,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 107,
                  "end": 143,
                  "callee": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 114,
                    "name": "require",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 115,
                      "end": 142,
                      "value": "../outside-of-rootdir/foo",
                      "raw": "'../outside-of-rootdir/foo'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "ObjectPattern",
                  "start": 155,
                  "end": 183,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 162,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "name": "other",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "name": "other",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
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
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 173,
                            "name": "other",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 173,
                            "end": 181,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 175,
                              "end": 181
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "start": 186,
                  "end": 204,
                  "callee": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 193,
                    "name": "require",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 194,
                      "end": 203,
                      "value": "./other",
                      "raw": "'./other'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
