__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "name": "a",
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
                  "value": "baz",
                  "raw": "\"baz\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 17,
            "end": 46,
            "expression": {
              "type": "Literal",
              "start": 17,
              "end": 22,
              "value": "foo",
              "raw": "\"foo\""
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
                    "value": "foo",
                    "raw": "\"foo\""
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
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ]
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
      "start": 48,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 71,
            "name": "b",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 62,
                      "name": "xyz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "value": "baz",
                          "raw": "\"baz\""
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "name": "xyz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 81,
                    "end": 86,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "kind": "init",
                  "optional": false
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 104,
                    "name": "xyz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "value": "foo",
                            "raw": "\"foo\""
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
                            "value": "bar",
                            "raw": "\"bar\""
                          }
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
