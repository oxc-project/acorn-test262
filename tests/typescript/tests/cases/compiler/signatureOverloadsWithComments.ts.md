__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 348,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 348,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 37,
            "end": 346,
            "argument": {
              "type": "ClassExpression",
              "start": 44,
              "end": 346,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 50,
                "end": 53,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 54,
                "end": 346,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 109,
                    "end": 132,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 112,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 112,
                      "end": 132,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 113,
                          "end": 124,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 116,
                            "end": 124,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 118,
                              "end": 124
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 125,
                        "end": 131,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 127,
                          "end": 131
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 249,
                    "end": 263,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 252,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 252,
                      "end": 263,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 254,
                        "end": 262,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 256,
                          "end": 262
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 272,
                    "end": 340,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 275,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 275,
                      "end": 340,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 276,
                          "end": 288,
                          "decorators": [],
                          "name": "bar",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 280,
                            "end": 288,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 282,
                              "end": 288
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 289,
                        "end": 304,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 291,
                          "end": 304,
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 291,
                              "end": 297
                            },
                            {
                              "type": "TSVoidKeyword",
                              "start": 300,
                              "end": 304
                            }
                          ]
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 305,
                        "end": 340,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 319,
                            "end": 330,
                            "argument": {
                              "type": "Literal",
                              "start": 326,
                              "end": 330,
                              "value": "hi",
                              "raw": "'hi'"
                            }
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
