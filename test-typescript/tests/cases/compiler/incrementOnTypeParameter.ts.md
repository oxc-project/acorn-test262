__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 117,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 115,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 115,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 43,
                        "end": 49,
                        "object": {
                          "type": "ThisExpression",
                          "start": 43,
                          "end": 47
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ForStatement",
                    "start": 62,
                    "end": 109,
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 67,
                      "end": 82,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 71,
                          "end": 75,
                          "id": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 75,
                            "name": "i",
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
                                  "name": "T",
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
                        },
                        {
                          "type": "VariableDeclarator",
                          "start": 77,
                          "end": 82,
                          "id": {
                            "type": "Identifier",
                            "start": 77,
                            "end": 78,
                            "name": "j",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 81,
                            "end": 82,
                            "value": 0,
                            "raw": "0"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 84,
                      "end": 90,
                      "left": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
                        "name": "j",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 88,
                        "end": 90,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 92,
                      "end": 95,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 97,
                      "end": 109,
                      "body": []
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
          }
        ]
      },
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
