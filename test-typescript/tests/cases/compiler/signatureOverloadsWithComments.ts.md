__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 349,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "id": {
                "type": "Identifier",
                "start": 50,
                "end": 53,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 54,
                "end": 346,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 109,
                    "end": 132,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 112,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 112,
                      "end": 132,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 113,
                          "end": 124,
                          "name": "bar",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 116,
                            "end": 124,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 118,
                              "end": 124
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 125,
                        "end": 131,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 127,
                          "end": 131
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 249,
                    "end": 263,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 252,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 252,
                      "end": 263,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 254,
                        "end": 262,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 256,
                          "end": 262
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 272,
                    "end": 340,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 275,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 275,
                      "end": 340,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 276,
                          "end": 288,
                          "name": "bar",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 280,
                            "end": 288,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 282,
                              "end": 288
                            }
                          },
                          "decorators": [],
                          "optional": true
                        }
                      ],
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
                      "declare": false,
                      "typeParameters": null,
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
                      }
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
