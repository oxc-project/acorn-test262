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
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 152,
              "end": 276,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 162,
                  "end": 270,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 169,
                    "name": "methodA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 169,
                    "end": 270,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
            "start": 282,
            "end": 394,
            "id": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 290,
              "end": 394,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 300,
                  "end": 388,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 307,
                    "name": "methodB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 307,
                    "end": 388,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                              "name": "methodA",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
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
                              "name": "methodB",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
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
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
