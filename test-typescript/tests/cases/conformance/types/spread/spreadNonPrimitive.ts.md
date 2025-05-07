__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 15,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 56,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 32,
                "end": 56,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 34,
                    "end": 44,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 45,
                    "end": 54,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 46,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 46,
                      "end": 54,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 48,
                        "end": 54
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 59,
            "end": 79,
            "properties": [
              {
                "type": "Property",
                "start": 61,
                "end": 65,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 67,
                "end": 71,
                "argument": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 73,
                "end": 77,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 76,
                  "end": 77,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
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
