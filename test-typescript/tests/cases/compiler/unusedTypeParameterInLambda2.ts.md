unusedTypeParameterInLambda2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 111,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 109,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "f1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 109,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 109,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 36,
                    "end": 103,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 43,
                      "end": 103,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 55,
                        "end": 103,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 69,
                            "end": 78,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 73,
                                "end": 77,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 77,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 74,
                                    "end": 77,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 76,
                                      "end": 77,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 76,
                                        "end": 77,
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false
                                      }
                                    }
                                  }
                                },
                                "init": null
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 91,
                            "end": 93,
                            "expression": {
                              "type": "Identifier",
                              "start": 91,
                              "end": 92,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 43,
                        "end": 49,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 44,
                            "end": 45,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 44,
                              "end": 45,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            },
                            "out": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 47,
                            "end": 48,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 47,
                              "end": 48,
                              "decorators": [],
                              "name": "X",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
