__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 8,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "getX",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 10,
      "end": 165,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 165,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 24,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 28,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 76,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 76,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 60,
                    "end": 72,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 60,
                      "end": 71,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 60,
                        "end": 67,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 60,
                          "end": 64
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 65,
                          "end": 67,
                          "name": "x"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 71,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "StaticBlock",
            "start": 80,
            "end": 163,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 133,
                "end": 159,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 133,
                  "end": 158,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 137,
                    "decorators": [],
                    "name": "getX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 140,
                    "end": 158,
                    "async": false,
                    "body": {
                      "type": "MemberExpression",
                      "start": 152,
                      "end": 158,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 152,
                        "end": 155,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 156,
                        "end": 158,
                        "name": "x"
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 141,
                        "end": 147,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 144,
                          "end": 147,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 146,
                            "end": 147,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 146,
                              "end": 147,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
