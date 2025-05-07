__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 149,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 31,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 20,
            "end": 29,
            "argument": {
              "type": "Literal",
              "start": 27,
              "end": 29,
              "raw": "''",
              "value": "",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
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
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 149,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 147,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 147,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 72,
                    "end": 123,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 76,
                        "end": 122,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 79,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 82,
                          "end": 122,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 96,
                              "end": 112,
                              "computed": true,
                              "key": {
                                "type": "CallExpression",
                                "start": 97,
                                "end": 105,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 97,
                                  "end": 100,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 100,
                                  "end": 103,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 101,
                                      "end": 102,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 101,
                                        "end": 102,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                }
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 106,
                                "end": 112,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 109,
                                  "end": 112,
                                  "body": []
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 132,
                    "end": 141,
                    "argument": {
                      "type": "Literal",
                      "start": 139,
                      "end": 140,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
