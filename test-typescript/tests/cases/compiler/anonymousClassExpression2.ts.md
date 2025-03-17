__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 128,
  "end": 397,
  "body": [
    {
      "type": "WhileStatement",
      "start": 128,
      "end": 396,
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 396,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 144,
            "end": 276,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 152,
              "end": 276,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 162,
                  "end": 270,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 169,
                    "decorators": [],
                    "name": "methodA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 169,
                    "end": 270,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 172,
                      "end": 270,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 186,
                          "end": 191,
                          "directive": null,
                          "expression": {
                            "type": "ThisExpression",
                            "start": 186,
                            "end": 190
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ClassDeclaration",
            "start": 282,
            "end": 394,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 290,
              "end": 394,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 300,
                  "end": 388,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 307,
                    "decorators": [],
                    "name": "methodB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 307,
                    "end": 388,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 310,
                      "end": 388,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 324,
                          "end": 337,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 324,
                            "end": 336,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 324,
                              "end": 328
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 329,
                              "end": 336,
                              "decorators": [],
                              "name": "methodA",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 359,
                          "end": 372,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 359,
                            "end": 371,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 359,
                              "end": 363
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 364,
                              "end": 371,
                              "decorators": [],
                              "name": "methodB",
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
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 135,
        "end": 136,
        "raw": "0",
        "value": 0
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
