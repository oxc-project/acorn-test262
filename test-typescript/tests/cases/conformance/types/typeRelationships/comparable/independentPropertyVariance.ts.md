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
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 113,
            "name": "x",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 102,
                    "end": 111,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 105,
                        "end": 111
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 153,
            "name": "y",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 143,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 137,
                        "end": 143
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 145,
                    "end": 151,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "value": "a",
                          "raw": "'a'"
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 164,
      "expression": {
        "type": "BinaryExpression",
        "start": 156,
        "end": 163,
        "left": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
