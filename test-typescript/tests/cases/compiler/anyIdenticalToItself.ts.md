__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 21,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 19,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 19,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 16,
              "end": 19
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 43,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 41,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 41,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 79,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 57,
          "end": 63,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 63,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            }
          }
        },
        {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 74,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 68,
              "end": 74
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 81,
      "end": 181,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 181,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 153,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 153,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 153,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 118,
                    "end": 129,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 122,
                        "end": 128,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 128,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 123,
                            "end": 128,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 125,
                              "end": 128
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 138,
                    "end": 147,
                    "argument": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 146,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 102,
                "end": 107,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 104,
                  "end": 107
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 179,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 179,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 172,
                "end": 179,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 164,
                  "end": 170,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 170,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 167,
                      "end": 170
                    }
                  }
                }
              ],
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
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
