__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 32
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 35,
              "end": 37
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 15,
            "end": 38
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 50
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 48,
              "end": 61
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 82,
                      "end": 89
                    },
                    "start": 75,
                    "end": 90
                  }
                ],
                "start": 65,
                "end": 96
              },
              "expression": false,
              "start": 62,
              "end": 96
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 43,
            "end": 96
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 108
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 119
              },
              "optional": false,
              "computed": false,
              "start": 106,
              "end": 119
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 124,
                      "end": 130
                    },
                    "start": 122,
                    "end": 130
                  },
                  "start": 121,
                  "end": 130
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 147
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 151
                        },
                        "definite": false,
                        "start": 146,
                        "end": 151
                      }
                    ],
                    "declare": false,
                    "start": 142,
                    "end": 152
                  }
                ],
                "start": 132,
                "end": 158
              },
              "expression": false,
              "start": 120,
              "end": 158
            },
            "kind": "set",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 101,
            "end": 158
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 166
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 177
              },
              "optional": false,
              "computed": false,
              "start": 164,
              "end": 177
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 181,
                "end": 184
              },
              "expression": false,
              "start": 178,
              "end": 184
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 163,
            "end": 184
          }
        ],
        "start": 9,
        "end": 186
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 197
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 221
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 224,
                "end": 226
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 204,
              "end": 227
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 239
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "staticProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 250
                },
                "optional": false,
                "computed": false,
                "start": 237,
                "end": 250
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 271,
                        "end": 278
                      },
                      "start": 264,
                      "end": 279
                    }
                  ],
                  "start": 254,
                  "end": 285
                },
                "expression": false,
                "start": 251,
                "end": 285
              },
              "kind": "get",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 232,
              "end": 285
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 297
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "staticProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 308
                },
                "optional": false,
                "computed": false,
                "start": 295,
                "end": 308
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 313,
                        "end": 319
                      },
                      "start": 311,
                      "end": 319
                    },
                    "start": 310,
                    "end": 319
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 335,
                            "end": 336
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 340
                          },
                          "definite": false,
                          "start": 335,
                          "end": 340
                        }
                      ],
                      "declare": false,
                      "start": 331,
                      "end": 341
                    }
                  ],
                  "start": 321,
                  "end": 347
                },
                "expression": false,
                "start": 309,
                "end": 347
              },
              "kind": "set",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 290,
              "end": 347
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 355
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "staticProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 366
                },
                "optional": false,
                "computed": false,
                "start": 353,
                "end": 366
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 370,
                  "end": 373
                },
                "expression": false,
                "start": 367,
                "end": 373
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 352,
              "end": 373
            }
          ],
          "start": 198,
          "end": 375
        },
        "abstract": false,
        "declare": false,
        "start": 189,
        "end": 375
      },
      "directive": null,
      "start": 188,
      "end": 376
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 376
}
```
