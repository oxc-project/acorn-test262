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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 63,
            "name": "f",
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
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 20,
                            "end": 29,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 21,
                              "end": 29,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 23,
                                "end": 29
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 40,
                        "end": 45,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 41,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                              "value": "",
                              "raw": "\"\""
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
                    "start": 50,
                    "end": 63,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 52,
                        "end": 61,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 52,
                          "end": 53,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 53,
                          "end": 61,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 55,
                            "end": 61
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
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
      "start": 64,
      "end": 67,
      "expression": {
        "type": "CallExpression",
        "start": 64,
        "end": 67,
        "callee": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
