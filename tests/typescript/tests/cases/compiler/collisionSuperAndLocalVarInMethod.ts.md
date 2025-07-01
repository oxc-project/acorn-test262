__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "_super",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 13,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 38
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 69
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 72,
                          "end": 74
                        },
                        "definite": false,
                        "start": 63,
                        "end": 74
                      }
                    ],
                    "declare": false,
                    "start": 59,
                    "end": 75
                  }
                ],
                "start": 49,
                "end": 93
              },
              "expression": false,
              "start": 46,
              "end": 93
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 45,
            "end": 93
          }
        ],
        "start": 39,
        "end": 95
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 95
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 115
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 132
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 155
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 158,
                          "end": 160
                        },
                        "definite": false,
                        "start": 149,
                        "end": 160
                      }
                    ],
                    "declare": false,
                    "start": 145,
                    "end": 161
                  }
                ],
                "start": 135,
                "end": 187
              },
              "expression": false,
              "start": 132,
              "end": 187
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 122,
            "end": 187
          }
        ],
        "start": 116,
        "end": 189
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 189
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 197
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 209
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 226
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 243,
                          "end": 244
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
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
                                      "name": "_super",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 271,
                                      "end": 277
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 280,
                                      "end": 282
                                    },
                                    "definite": false,
                                    "start": 271,
                                    "end": 282
                                  }
                                ],
                                "declare": false,
                                "start": 267,
                                "end": 283
                              }
                            ],
                            "start": 253,
                            "end": 312
                          },
                          "id": null,
                          "generator": false,
                          "start": 247,
                          "end": 312
                        },
                        "definite": false,
                        "start": 243,
                        "end": 312
                      }
                    ],
                    "declare": false,
                    "start": 239,
                    "end": 312
                  }
                ],
                "start": 229,
                "end": 318
              },
              "expression": false,
              "start": 226,
              "end": 318
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 216,
            "end": 318
          }
        ],
        "start": 210,
        "end": 320
      },
      "abstract": false,
      "declare": false,
      "start": 190,
      "end": 320
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 320
}
```
