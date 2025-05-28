__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 128,
  "end": 396,
  "body": [
    {
      "type": "WhileStatement",
      "start": 128,
      "end": 396,
      "test": {
        "type": "Literal",
        "start": 135,
        "end": 136,
        "value": 0,
        "raw": "0"
      },
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 396,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 144,
            "end": 276,
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
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 152,
              "end": 276,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 162,
                  "end": 270,
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
                  "value": {
                    "type": "FunctionExpression",
                    "start": 169,
                    "end": 270,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 172,
                      "end": 270,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 186,
                          "end": 191,
                          "expression": {
                            "type": "ThisExpression",
                            "start": 186,
                            "end": 190
                          },
                          "directive": null
                        }
                      ]
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
            "type": "ClassDeclaration",
            "start": 282,
            "end": 394,
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
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 290,
              "end": 394,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 300,
                  "end": 388,
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
                  "value": {
                    "type": "FunctionExpression",
                    "start": 307,
                    "end": 388,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 310,
                      "end": 388,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 324,
                          "end": 337,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 324,
                            "end": 336,
                            "object": {
                              "type": "ThisExpression",
                              "start": 324,
                              "end": 328
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 329,
                              "end": 336,
                              "decorators": [],
                              "name": "methodA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 359,
                          "end": 372,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 359,
                            "end": 371,
                            "object": {
                              "type": "ThisExpression",
                              "start": 359,
                              "end": 363
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 364,
                              "end": 371,
                              "decorators": [],
                              "name": "methodB",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "directive": null
                        }
                      ]
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
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
