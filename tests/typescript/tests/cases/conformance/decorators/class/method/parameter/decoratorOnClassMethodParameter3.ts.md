__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 221,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 77,
          "end": 83,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 83,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 80,
              "end": 83
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 84,
        "end": 89,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 86,
          "end": 89
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 102,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 125,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 108,
            "end": 125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 110,
              "end": 125,
              "typeName": {
                "type": "Identifier",
                "start": 110,
                "end": 117,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 117,
                "end": 125,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 118,
                    "end": 124
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 131,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 128,
          "end": 131
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 221,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 136,
            "end": 204,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 148,
              "end": 204,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 154,
                  "end": 200,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 166,
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 166,
                    "end": 200,
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 185,
                        "end": 196,
                        "decorators": [
                          {
                            "type": "Decorator",
                            "start": 167,
                            "end": 184,
                            "expression": {
                              "type": "CallExpression",
                              "start": 168,
                              "end": 184,
                              "callee": {
                                "type": "Identifier",
                                "start": 168,
                                "end": 171,
                                "decorators": [],
                                "name": "dec",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "start": 172,
                                  "end": 183,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 178,
                                    "end": 183,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "optional": false
                            }
                          }
                        ],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 188,
                          "end": 196,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 190,
                            "end": 196
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 198,
                      "end": 200,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
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
            "type": "ReturnStatement",
            "start": 207,
            "end": 219,
            "argument": {
              "type": "Identifier",
              "start": 214,
              "end": 219,
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
