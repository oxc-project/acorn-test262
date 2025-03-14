incrementOnTypeParameter.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 117,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 117,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 115,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 115,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 115,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 43,
                    "end": 52,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 43,
                      "end": 51,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 43,
                        "end": 49,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 43,
                          "end": 47
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 62,
                    "end": 109,
                    "body": {
                      "type": "BlockStatement",
                      "start": 97,
                      "end": 109,
                      "body": []
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 67,
                      "end": 82,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 71,
                          "end": 75,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 75,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 72,
                              "end": 75,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 74,
                                "end": 75,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 74,
                                  "end": 75,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          "init": null
                        },
                        {
                          "type": "VariableDeclarator",
                          "start": 77,
                          "end": 82,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 77,
                            "end": 78,
                            "decorators": [],
                            "name": "j",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 81,
                            "end": 82,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 84,
                      "end": 90,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
                        "decorators": [],
                        "name": "j",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 88,
                        "end": 90,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 92,
                      "end": 95,
                      "argument": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
  "sourceType": "script"
}
```
