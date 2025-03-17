__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 299,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 38,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 36,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 36,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 36,
                "body": []
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
      "start": 39,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 298,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 77,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "name": "_t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 296,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 93,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 296,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 296,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 106,
                    "end": 132,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 110,
                        "end": 131,
                        "id": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 114,
                          "end": 131,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 120,
                            "end": 131,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 122,
                                "end": 129,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 122,
                                  "end": 129,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 122,
                                    "end": 126
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 127,
                                    "end": 129,
                                    "name": "_t",
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
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 145,
                    "expression": {
                      "type": "CallExpression",
                      "start": 141,
                      "end": 144,
                      "callee": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 246,
                    "end": 254,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 246,
                      "end": 253,
                      "object": {
                        "type": "ThisExpression",
                        "start": 246,
                        "end": 250
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 253,
                        "name": "_t",
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
                    "start": 273,
                    "end": 290,
                    "expression": {
                      "type": "CallExpression",
                      "start": 273,
                      "end": 289,
                      "callee": {
                        "type": "Super",
                        "start": 273,
                        "end": 278
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 279,
                          "end": 288,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
