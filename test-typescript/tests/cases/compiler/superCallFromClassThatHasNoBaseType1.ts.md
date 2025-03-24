__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 76,
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
        "end": 76,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 74,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 74,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "map",
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
                            "name": "value",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 45,
                              "end": 53,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 47,
                                "end": 53
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 74,
                "body": []
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 142,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 92,
            "end": 140,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 103,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 140,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 140,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 108,
                    "end": 138,
                    "expression": {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 137,
                      "callee": {
                        "type": "Super",
                        "start": 108,
                        "end": 113
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 114,
                          "end": 136,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 114,
                              "end": 119,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 123,
                            "end": 136,
                            "callee": {
                              "type": "Identifier",
                              "start": 123,
                              "end": 129,
                              "name": "String",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 130,
                                "end": 135,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
