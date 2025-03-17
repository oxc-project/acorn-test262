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
              "optional": false,
              "typeAnnotation": null
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
  "end": 160,
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
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 159,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 159,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 49,
            "end": 96,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 55,
                "end": 95,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 59,
                  "end": 95,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 67,
                      "end": 94,
                      "raw": "'../outside-of-rootdir/foo'",
                      "value": "../outside-of-rootdir/foo"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 66,
                    "decorators": [],
                    "name": "require",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 101,
            "end": 157,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 156,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 107,
                  "end": 135,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 109,
                      "end": 114,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 114,
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 114,
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 118,
                      "end": 135,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 120,
                          "end": 133,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 125,
                            "decorators": [],
                            "name": "other",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 125,
                            "end": 133,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 127,
                              "end": 133
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "start": 138,
                  "end": 156,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 146,
                      "end": 155,
                      "raw": "'./other'",
                      "value": "./other"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 145,
                    "decorators": [],
                    "name": "require",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
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
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
