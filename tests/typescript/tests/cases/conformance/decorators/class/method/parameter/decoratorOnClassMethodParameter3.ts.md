__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 80,
              "end": 83
            },
            "start": 78,
            "end": 83
          },
          "start": 77,
          "end": 83
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 86,
          "end": 89
        },
        "start": 84,
        "end": 89
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 102
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 117
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 118,
                    "end": 124
                  }
                ],
                "start": 117,
                "end": 125
              },
              "start": 110,
              "end": 125
            },
            "start": 108,
            "end": 125
          },
          "start": 103,
          "end": 125
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 128,
          "end": 131
        },
        "start": 126,
        "end": 131
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 147
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 166
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [
                          {
                            "type": "Decorator",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "dec",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 168,
                                "end": 171
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 178,
                                    "end": 183
                                  },
                                  "start": 172,
                                  "end": 183
                                }
                              ],
                              "optional": false,
                              "start": 168,
                              "end": 184
                            },
                            "start": 167,
                            "end": 184
                          }
                        ],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 190,
                            "end": 196
                          },
                          "start": 188,
                          "end": 196
                        },
                        "start": 185,
                        "end": 196
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 198,
                      "end": 200
                    },
                    "expression": false,
                    "start": 166,
                    "end": 200
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 154,
                  "end": 200
                }
              ],
              "start": 148,
              "end": 204
            },
            "abstract": false,
            "declare": false,
            "start": 136,
            "end": 204
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 219
            },
            "start": 207,
            "end": 219
          }
        ],
        "start": 132,
        "end": 221
      },
      "expression": false,
      "start": 91,
      "end": 221
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 221
}
```
