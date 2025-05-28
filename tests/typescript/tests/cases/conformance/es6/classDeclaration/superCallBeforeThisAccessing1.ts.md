__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "decorators": [],
            "name": "Factory",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 63,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 36,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 37,
        "end": 63,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 61,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 54,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 54,
              "end": 61,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 61,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 64,
      "end": 234,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 80,
        "end": 84,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 234,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 101,
              "decorators": [],
              "name": "_t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 232,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 118,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 232,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 121,
                "end": 232,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 131,
                    "end": 140,
                    "expression": {
                      "type": "CallExpression",
                      "start": 131,
                      "end": 139,
                      "callee": {
                        "type": "Super",
                        "start": 131,
                        "end": 136
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 137,
                          "end": 138,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 149,
                    "end": 191,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 153,
                        "end": 191,
                        "id": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 154,
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 157,
                          "end": 191,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 171,
                              "end": 181,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 171,
                                "end": 172,
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "MemberExpression",
                                "start": 174,
                                "end": 181,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 174,
                                  "end": 178
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 179,
                                  "end": 181,
                                  "decorators": [],
                                  "name": "_t",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 200,
                    "end": 226,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 204,
                        "end": 225,
                        "id": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 205,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 208,
                          "end": 225,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 208,
                            "end": 222,
                            "object": {
                              "type": "Identifier",
                              "start": 208,
                              "end": 215,
                              "decorators": [],
                              "name": "Factory",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 216,
                              "end": 222,
                              "decorators": [],
                              "name": "create",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 223,
                              "end": 224,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
