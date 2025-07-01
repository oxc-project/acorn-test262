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
            "name": "f",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 23,
                                "end": 29
                              },
                              "start": 21,
                              "end": 29
                            },
                            "start": 20,
                            "end": 29
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 32,
                            "end": 38
                          },
                          "start": 30,
                          "end": 38
                        },
                        "start": 19,
                        "end": 39
                      },
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
                          "start": 40,
                          "end": 41
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "",
                              "raw": "\"\"",
                              "start": 43,
                              "end": 45
                            },
                            "start": 43,
                            "end": 45
                          },
                          "start": 41,
                          "end": 45
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 40,
                        "end": 45
                      }
                    ],
                    "start": 17,
                    "end": 47
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 52,
                          "end": 53
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 55,
                            "end": 61
                          },
                          "start": 53,
                          "end": 61
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 52,
                        "end": 61
                      }
                    ],
                    "start": 50,
                    "end": 63
                  }
                ],
                "start": 17,
                "end": 63
              },
              "start": 15,
              "end": 63
            },
            "start": 14,
            "end": 63
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 63
        }
      ],
      "declare": true,
      "start": 0,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 65
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 64,
        "end": 67
      },
      "directive": null,
      "start": 64,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 67
}
```
