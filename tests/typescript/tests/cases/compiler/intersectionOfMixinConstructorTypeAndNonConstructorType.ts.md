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
            "name": "x",
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 37,
                          "end": 40
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 42,
                            "end": 51
                          },
                          "start": 40,
                          "end": 51
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 37,
                        "end": 51
                      }
                    ],
                    "start": 36,
                    "end": 52
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 63,
                              "end": 67
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 69,
                                  "end": 72
                                },
                                "start": 69,
                                "end": 74
                              },
                              "start": 67,
                              "end": 74
                            },
                            "value": null,
                            "start": 60,
                            "end": 74
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 77,
                            "end": 80
                          },
                          "start": 75,
                          "end": 80
                        },
                        "start": 56,
                        "end": 80
                      }
                    ],
                    "start": 55,
                    "end": 81
                  }
                ],
                "start": 36,
                "end": 81
              },
              "start": 34,
              "end": 81
            },
            "start": 33,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 81
        }
      ],
      "declare": true,
      "start": 21,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 88
        },
        "typeArguments": null,
        "arguments": [],
        "start": 83,
        "end": 90
      },
      "directive": null,
      "start": 83,
      "end": 91
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 91
}
```
