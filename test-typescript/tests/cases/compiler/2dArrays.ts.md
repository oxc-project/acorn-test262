__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Cell",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 26,
        "name": "Ship",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 51,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "name": "isSunk",
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
              "start": 39,
              "end": 48,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 41,
                "end": 48
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "name": "Board",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 218,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 71,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 76,
              "name": "ships",
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
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 78,
                "end": 84,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 82,
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 82,
                    "name": "Ship",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 90,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 95,
              "name": "cells",
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
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 97,
                "end": 103,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 97,
                  "end": 101,
                  "typeName": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 101,
                    "name": "Cell",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 212,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 130,
              "name": "allShipsSunk",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 212,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 212,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 143,
                    "end": 206,
                    "argument": {
                      "type": "CallExpression",
                      "start": 150,
                      "end": 205,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 166,
                        "object": {
                          "type": "MemberExpression",
                          "start": 150,
                          "end": 160,
                          "object": {
                            "type": "ThisExpression",
                            "start": 150,
                            "end": 154
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 160,
                            "name": "ships",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 166,
                          "name": "every",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 167,
                          "end": 204,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 177,
                              "end": 180,
                              "name": "val",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 182,
                            "end": 204,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 184,
                                "end": 202,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 191,
                                  "end": 201,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 191,
                                    "end": 194,
                                    "name": "val",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 195,
                                    "end": 201,
                                    "name": "isSunk",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
            "accessibility": "private"
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
