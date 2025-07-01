__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                      "start": 17,
                      "end": 18
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 20,
                          "end": 21
                        },
                        "start": 20,
                        "end": 21
                      },
                      "start": 18,
                      "end": 21
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 17,
                    "end": 21
                  }
                ],
                "start": 15,
                "end": 23
              },
              "start": 13,
              "end": 23
            },
            "start": 12,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 25
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 28,
          "end": 29
        },
        "start": 24,
        "end": 29
      },
      "directive": null,
      "start": 24,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "type": "TSIntersectionType",
                "types": [
                  {
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
                          "start": 49,
                          "end": 50
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 52,
                              "end": 53
                            },
                            "start": 52,
                            "end": 53
                          },
                          "start": 50,
                          "end": 53
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 49,
                        "end": 53
                      }
                    ],
                    "start": 47,
                    "end": 55
                  },
                  {
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 60,
                          "end": 61
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 63,
                            "end": 69
                          },
                          "start": 61,
                          "end": 69
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 60,
                        "end": 69
                      }
                    ],
                    "start": 58,
                    "end": 71
                  }
                ],
                "start": 47,
                "end": 71
              },
              "start": 45,
              "end": 71
            },
            "start": 44,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 44,
          "end": 71
        }
      ],
      "declare": true,
      "start": 32,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 73
        },
        "operator": ">",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 76,
          "end": 77
        },
        "start": 72,
        "end": 77
      },
      "directive": null,
      "start": 72,
      "end": 78
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
