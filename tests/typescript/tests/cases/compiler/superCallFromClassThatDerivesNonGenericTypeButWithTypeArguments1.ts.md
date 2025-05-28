__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 76,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 76,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 74,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 74,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 26,
                  "end": 64,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 64,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 39,
                        "end": 64,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 40,
                            "end": 53,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 45,
                              "end": 53,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 47,
                                "end": 53
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 55,
                          "end": 64,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 58,
                            "end": 64
                          }
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 74,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 168,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 95,
        "end": 111,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 96,
            "end": 102
          },
          {
            "type": "TSStringKeyword",
            "start": 104,
            "end": 110
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 168,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 118,
            "end": 166,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 129,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 166,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 166,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 134,
                    "end": 164,
                    "expression": {
                      "type": "CallExpression",
                      "start": 134,
                      "end": 163,
                      "callee": {
                        "type": "Super",
                        "start": 134,
                        "end": 139
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 140,
                          "end": 162,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 140,
                              "end": 145,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "start": 149,
                            "end": 162,
                            "callee": {
                              "type": "Identifier",
                              "start": 149,
                              "end": 155,
                              "decorators": [],
                              "name": "String",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 156,
                                "end": 161,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
