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
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
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
                "id": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 59,
                  "end": 95,
                  "callee": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 66,
                    "name": "require",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 67,
                      "end": 94,
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
            "start": 101,
            "end": 157,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 156,
                "id": {
                  "type": "ObjectPattern",
                  "start": 107,
                  "end": 135,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 109,
                      "end": 114,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 114,
                        "name": "other",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 114,
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 125,
                            "name": "other",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 125,
                            "end": 133,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 127,
                              "end": 133
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
                  "start": 138,
                  "end": 156,
                  "callee": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 145,
                    "name": "require",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 146,
                      "end": 155,
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
