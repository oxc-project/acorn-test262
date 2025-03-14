__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 65,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 65,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 56,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 56,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 31,
                      "end": 56,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 32,
                          "end": 36,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 33,
                            "end": 36,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 35,
                              "end": 36,
                              "typeName": {
                                "type": "Identifier",
                                "start": 35,
                                "end": 36,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 38,
                        "end": 56,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 41,
                          "end": 56,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 43,
                              "end": 54,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 43,
                                "end": 44,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 44,
                                "end": 54,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 46,
                                  "end": 54,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 48,
                                      "end": 52,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 48,
                                        "end": 49,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "readonly": false,
                                      "static": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 49,
                                        "end": 52,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 51,
                                          "end": 52,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 51,
                                            "end": 52,
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
