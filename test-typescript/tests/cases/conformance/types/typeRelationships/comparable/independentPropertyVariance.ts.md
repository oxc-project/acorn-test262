__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 165,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 113,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 94,
                "end": 113,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 96,
                    "end": 101,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 97,
                      "end": 100,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 99,
                        "end": 100,
                        "literal": {
                          "type": "Literal",
                          "start": 99,
                          "end": 100,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 102,
                    "end": 111,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 105,
                        "end": 111
                      }
                    }
                  }
                ]
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
      "start": 115,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 153,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 132,
                "end": 153,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 134,
                    "end": 144,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 143,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 137,
                        "end": 143
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 145,
                    "end": 151,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 148,
                        "end": 151,
                        "literal": {
                          "type": "Literal",
                          "start": 148,
                          "end": 151,
                          "raw": "'a'",
                          "value": "a"
                        }
                      }
                    }
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 156,
      "end": 164,
      "expression": {
        "type": "BinaryExpression",
        "start": 156,
        "end": 163,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
