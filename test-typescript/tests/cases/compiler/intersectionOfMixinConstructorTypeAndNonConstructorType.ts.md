intersectionOfMixinConstructorTypeAndNonConstructorType.ts
```json
{
  "type": "Program",
  "start": 21,
  "end": 92,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 81,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 81,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 36,
                "end": 81,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 36,
                    "end": 52,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 37,
                        "end": 51,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 37,
                          "end": 40,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 40,
                          "end": 51,
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 42,
                            "end": 51
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 55,
                    "end": 81,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 56,
                        "end": 80,
                        "params": [
                          {
                            "type": "RestElement",
                            "start": 60,
                            "end": 74,
                            "argument": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 67,
                              "decorators": [],
                              "name": "args",
                              "optional": false
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 67,
                              "end": 74,
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "start": 69,
                                "end": 74,
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 69,
                                  "end": 72
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 75,
                          "end": 80,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 77,
                            "end": 80
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
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 91,
      "expression": {
        "type": "NewExpression",
        "start": 83,
        "end": 90,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 88,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
