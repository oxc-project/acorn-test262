__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 63,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 63,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 17,
                "end": 63,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 17,
                    "end": 47,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 19,
                        "end": 39,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 20,
                            "end": 29,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 21,
                              "end": 29,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 23,
                                "end": 29
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 30,
                          "end": 38,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 32,
                            "end": 38
                          }
                        },
                        "typeParameters": null
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 40,
                        "end": 45,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 41,
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
                          "start": 41,
                          "end": 45,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 43,
                            "end": 45,
                            "literal": {
                              "type": "Literal",
                              "start": 43,
                              "end": 45,
                              "raw": "\"\"",
                              "value": ""
                            }
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 50,
                    "end": 63,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 52,
                        "end": 61,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 52,
                          "end": 53,
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
                          "start": 53,
                          "end": 61,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 55,
                            "end": 61
                          }
                        }
                      }
                    ]
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
      "start": 64,
      "end": 67,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 64,
        "end": 67,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
