__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "A",
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
        "start": 13,
        "end": 36,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 19,
            "end": 34,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 26,
              "end": 33,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              },
              "expression": {
                "type": "Literal",
                "start": 31,
                "end": 33,
                "value": "",
                "raw": "\"\""
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 38,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "B",
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
        "start": 51,
        "end": 105,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 57,
            "end": 81,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 80,
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 75,
                  "decorators": [],
                  "name": "someLocal",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 70,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 72,
                      "end": 75
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 78,
                  "end": 80,
                  "properties": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 86,
            "end": 103,
            "argument": {
              "type": "Identifier",
              "start": 93,
              "end": 102,
              "decorators": [],
              "name": "someLocal",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 248,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 248,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 163,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 163,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 163,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 142,
                    "end": 157,
                    "argument": {
                      "type": "TSTypeAssertion",
                      "start": 149,
                      "end": 156,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 150,
                        "end": 153
                      },
                      "expression": {
                        "type": "Literal",
                        "start": 154,
                        "end": 156,
                        "value": "",
                        "raw": "\"\""
                      }
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 246,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 177,
              "end": 246,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 246,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 190,
                    "end": 214,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 194,
                        "end": 213,
                        "id": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 208,
                          "decorators": [],
                          "name": "someLocal",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 203,
                            "end": 208,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 205,
                              "end": 208
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 211,
                          "end": 213,
                          "properties": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 223,
                    "end": 240,
                    "argument": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 239,
                      "decorators": [],
                      "name": "someLocal",
                      "optional": false,
                      "typeAnnotation": null
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
