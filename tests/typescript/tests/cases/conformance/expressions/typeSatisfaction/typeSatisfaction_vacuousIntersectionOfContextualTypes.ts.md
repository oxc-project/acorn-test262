__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 14,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 9,
                "end": 14,
                "literal": {
                  "type": "Literal",
                  "start": 9,
                  "end": 14,
                  "raw": "\"baz\"",
                  "value": "baz"
                }
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 17,
            "end": 46,
            "expression": {
              "type": "Literal",
              "start": 17,
              "end": 22,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 33,
              "end": 46,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 33,
                  "end": 38,
                  "literal": {
                    "type": "Literal",
                    "start": 33,
                    "end": 38,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 41,
                  "end": 46,
                  "literal": {
                    "type": "Literal",
                    "start": 41,
                    "end": 46,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 71,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 57,
                "end": 71,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 59,
                    "end": 69,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 62,
                      "decorators": [],
                      "name": "xyz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 62,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 64,
                        "end": 69,
                        "literal": {
                          "type": "Literal",
                          "start": 64,
                          "end": 69,
                          "raw": "\"baz\"",
                          "value": "baz"
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 74,
            "end": 121,
            "expression": {
              "type": "ObjectExpression",
              "start": 74,
              "end": 88,
              "properties": [
                {
                  "type": "Property",
                  "start": 76,
                  "end": 86,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 81,
                    "end": 86,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 99,
              "end": 121,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 101,
                  "end": 119,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 104,
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 106,
                      "end": 119,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 106,
                          "end": 111,
                          "literal": {
                            "type": "Literal",
                            "start": 106,
                            "end": 111,
                            "raw": "\"foo\"",
                            "value": "foo"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 114,
                          "end": 119,
                          "literal": {
                            "type": "Literal",
                            "start": 114,
                            "end": 119,
                            "raw": "\"bar\"",
                            "value": "bar"
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
