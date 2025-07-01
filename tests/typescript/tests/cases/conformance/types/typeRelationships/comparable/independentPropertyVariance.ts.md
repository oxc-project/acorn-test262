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
            "name": "x",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 99,
                          "end": 100
                        },
                        "start": 99,
                        "end": 100
                      },
                      "start": 97,
                      "end": 100
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 96,
                    "end": 101
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 103
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 105,
                        "end": 111
                      },
                      "start": 103,
                      "end": 111
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 102,
                    "end": 111
                  }
                ],
                "start": 94,
                "end": 113
              },
              "start": 92,
              "end": 113
            },
            "start": 91,
            "end": 113
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 113
        }
      ],
      "declare": true,
      "start": 77,
      "end": 114
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
            "name": "y",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 135
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 137,
                        "end": 143
                      },
                      "start": 135,
                      "end": 143
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 134,
                    "end": 144
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "'a'",
                          "start": 148,
                          "end": 151
                        },
                        "start": 148,
                        "end": 151
                      },
                      "start": 146,
                      "end": 151
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 145,
                    "end": 151
                  }
                ],
                "start": 132,
                "end": 153
              },
              "start": 130,
              "end": 153
            },
            "start": 129,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 129,
          "end": 153
        }
      ],
      "declare": true,
      "start": 115,
      "end": 154
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 157
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 163
        },
        "start": 156,
        "end": 163
      },
      "directive": null,
      "start": 156,
      "end": 164
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 164
}
```
