__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 222,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "name": "dec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 77,
          "end": 83,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 83,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 80,
              "end": 83
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 84,
        "end": 89,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 86,
          "end": 89
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 102,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 103,
          "end": 125,
          "name": "value",
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
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 221,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 136,
            "end": 204,
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "name": "Class",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 148,
              "end": 204,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 154,
                  "end": 200,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 166,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 166,
                    "end": 200,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 185,
                        "end": 196,
                        "name": "arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 188,
                          "end": 196,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 190,
                            "end": 196
                          }
                        },
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
                                "name": "dec",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "start": 172,
                                  "end": 183,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 178,
                                    "end": 183,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 198,
                      "end": 200,
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
            "type": "ReturnStatement",
            "start": 207,
            "end": 219,
            "argument": {
              "type": "Identifier",
              "start": 214,
              "end": 219,
              "name": "Class",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 126,
        "end": 131,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 128,
          "end": 131
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
