__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 135,
        "end": 136
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
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
                    "name": "methodA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 169
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "ThisExpression",
                            "start": 186,
                            "end": 190
                          },
                          "directive": null,
                          "start": 186,
                          "end": 191
                        }
                      ],
                      "start": 172,
                      "end": 270
                    },
                    "expression": false,
                    "start": 169,
                    "end": 270
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 162,
                  "end": 270
                }
              ],
              "start": 152,
              "end": 276
            },
            "abstract": false,
            "declare": false,
            "start": 144,
            "end": 276
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
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
                    "name": "methodB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 307
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 324,
                              "end": 328
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "methodA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 329,
                              "end": 336
                            },
                            "optional": false,
                            "computed": false,
                            "start": 324,
                            "end": 336
                          },
                          "directive": null,
                          "start": 324,
                          "end": 337
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 359,
                              "end": 363
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "methodB",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 364,
                              "end": 371
                            },
                            "optional": false,
                            "computed": false,
                            "start": 359,
                            "end": 371
                          },
                          "directive": null,
                          "start": 359,
                          "end": 372
                        }
                      ],
                      "start": 310,
                      "end": 388
                    },
                    "expression": false,
                    "start": 307,
                    "end": 388
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 300,
                  "end": 388
                }
              ],
              "start": 290,
              "end": 394
            },
            "abstract": false,
            "declare": false,
            "start": 282,
            "end": 394
          }
        ],
        "start": 138,
        "end": 396
      },
      "start": 128,
      "end": 396
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 128,
  "end": 396
}
```
