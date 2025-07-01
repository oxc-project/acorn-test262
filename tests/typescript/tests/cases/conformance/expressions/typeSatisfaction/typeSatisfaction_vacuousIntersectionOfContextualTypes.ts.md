__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "baz",
                  "raw": "\"baz\"",
                  "start": 9,
                  "end": 14
                },
                "start": 9,
                "end": 14
              },
              "start": 7,
              "end": 14
            },
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 17,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 33,
                    "end": 38
                  },
                  "start": 33,
                  "end": 38
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 41,
                    "end": 46
                  },
                  "start": 41,
                  "end": 46
                }
              ],
              "start": 33,
              "end": 46
            },
            "start": 17,
            "end": 46
          },
          "definite": false,
          "start": 6,
          "end": 46
        }
      ],
      "declare": false,
      "start": 0,
      "end": 47
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "xyz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 62
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "baz",
                          "raw": "\"baz\"",
                          "start": 64,
                          "end": 69
                        },
                        "start": 64,
                        "end": 69
                      },
                      "start": 62,
                      "end": 69
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 59,
                    "end": 69
                  }
                ],
                "start": 57,
                "end": 71
              },
              "start": 55,
              "end": 71
            },
            "start": 54,
            "end": 71
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 79
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 81,
                    "end": 86
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 76,
                  "end": 86
                }
              ],
              "start": 74,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "xyz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 104
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 106,
                            "end": 111
                          },
                          "start": 106,
                          "end": 111
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 114,
                            "end": 119
                          },
                          "start": 114,
                          "end": 119
                        }
                      ],
                      "start": 106,
                      "end": 119
                    },
                    "start": 104,
                    "end": 119
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 101,
                  "end": 119
                }
              ],
              "start": 99,
              "end": 121
            },
            "start": 74,
            "end": 121
          },
          "definite": false,
          "start": 54,
          "end": 121
        }
      ],
      "declare": false,
      "start": 48,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 122
}
```
