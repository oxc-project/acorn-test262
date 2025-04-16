__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 109,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 109,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 77,
                                  "name": "a",
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
                                        "name": "X",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": null,
                                "definite": false
                              }
                            ],
                            "kind": "var",
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 91,
                            "end": 93,
                            "expression": {
                              "type": "Identifier",
                              "start": 91,
                              "end": 92,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 43,
                        "end": 49,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 44,
                            "end": 45,
                            "name": {
                              "type": "Identifier",
                              "start": 44,
                              "end": 45,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 47,
                            "end": 48,
                            "name": {
                              "type": "Identifier",
                              "start": 47,
                              "end": 48,
                              "name": "X",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
