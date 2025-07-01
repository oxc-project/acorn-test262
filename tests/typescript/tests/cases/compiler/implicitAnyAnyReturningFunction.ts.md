__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
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
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              },
              "expression": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 31,
                "end": 33
              },
              "start": 26,
              "end": 33
            },
            "start": 19,
            "end": 34
          }
        ],
        "start": 13,
        "end": 36
      },
      "expression": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 48
      },
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
                  "name": "someLocal",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 72,
                      "end": 75
                    },
                    "start": 70,
                    "end": 75
                  },
                  "start": 61,
                  "end": 75
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 78,
                  "end": 80
                },
                "definite": false,
                "start": 61,
                "end": 80
              }
            ],
            "declare": false,
            "start": 57,
            "end": 81
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "someLocal",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 102
            },
            "start": 86,
            "end": 103
          }
        ],
        "start": 51,
        "end": 105
      },
      "expression": false,
      "start": 38,
      "end": 105
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 114
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
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
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 150,
                        "end": 153
                      },
                      "expression": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 154,
                        "end": 156
                      },
                      "start": 149,
                      "end": 156
                    },
                    "start": 142,
                    "end": 157
                  }
                ],
                "start": 132,
                "end": 163
              },
              "expression": false,
              "start": 129,
              "end": 163
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 121,
            "end": 163
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
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
                          "name": "someLocal",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 205,
                              "end": 208
                            },
                            "start": 203,
                            "end": 208
                          },
                          "start": 194,
                          "end": 208
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 211,
                          "end": 213
                        },
                        "definite": false,
                        "start": 194,
                        "end": 213
                      }
                    ],
                    "declare": false,
                    "start": 190,
                    "end": 214
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someLocal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 239
                    },
                    "start": 223,
                    "end": 240
                  }
                ],
                "start": 180,
                "end": 246
              },
              "expression": false,
              "start": 177,
              "end": 246
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 169,
            "end": 246
          }
        ],
        "start": 115,
        "end": 248
      },
      "abstract": false,
      "declare": false,
      "start": 107,
      "end": 248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 248
}
```
