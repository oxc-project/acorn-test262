__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 15,
                "end": 23,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 17,
                    "end": 21,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 18,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 18,
                      "end": 21,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 20,
                        "end": 21,
                        "literal": {
                          "type": "Literal",
                          "start": 20,
                          "end": 21,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 30,
      "expression": {
        "type": "BinaryExpression",
        "start": 24,
        "end": 29,
        "left": {
          "type": "Identifier",
          "start": 24,
          "end": 25,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 71,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 71,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 71,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 47,
                "end": 71,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 47,
                    "end": 55,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 49,
                        "end": 53,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 50,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 50,
                          "end": 53,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 52,
                            "end": 53,
                            "literal": {
                              "type": "Literal",
                              "start": 52,
                              "end": 53,
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 58,
                    "end": 71,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 60,
                        "end": 69,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 61,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 61,
                          "end": 69,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 63,
                            "end": 69
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 78,
      "expression": {
        "type": "BinaryExpression",
        "start": 72,
        "end": 77,
        "left": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "start": 76,
          "end": 77,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
