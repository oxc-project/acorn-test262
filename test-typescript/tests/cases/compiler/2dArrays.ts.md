2dArrays.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Cell",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 51,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 49,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 39,
              "decorators": [],
              "name": "isSunk",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 26,
        "decorators": [],
        "name": "Ship",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 218,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 218,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 71,
            "end": 85,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 76,
              "decorators": [],
              "name": "ships",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                    "decorators": [],
                    "name": "Ship",
                    "optional": false
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 90,
            "end": 104,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 95,
              "decorators": [],
              "name": "cells",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                    "decorators": [],
                    "name": "Cell",
                    "optional": false
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 110,
            "end": 212,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 130,
              "decorators": [],
              "name": "allShipsSunk",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 212,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "FunctionExpression",
                          "start": 167,
                          "end": 204,
                          "async": false,
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
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 191,
                                    "end": 194,
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 195,
                                    "end": 201,
                                    "decorators": [],
                                    "name": "isSunk",
                                    "optional": false
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
                              "start": 177,
                              "end": 180,
                              "decorators": [],
                              "name": "val",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 166,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 150,
                          "end": 160,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 150,
                            "end": 154
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 160,
                            "decorators": [],
                            "name": "ships",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 166,
                          "decorators": [],
                          "name": "every",
                          "optional": false
                        }
                      },
                      "optional": false
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
        "start": 59,
        "end": 64,
        "decorators": [],
        "name": "Board",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
