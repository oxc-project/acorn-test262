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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
              "value": "",
              "raw": "''"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 43,
        "end": 149,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 147,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 147,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 79,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": true,
                              "shorthand": false,
                              "computed": true,
                              "key": {
                                "type": "CallExpression",
                                "start": 97,
                                "end": 105,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 97,
                                  "end": 100,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
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
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 101,
                                        "end": 102,
                                        "name": "T",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 106,
                                "end": 112,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 109,
                                  "end": 112,
                                  "body": []
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 132,
                    "end": 141,
                    "argument": {
                      "type": "Literal",
                      "start": 139,
                      "end": 140,
                      "value": 0,
                      "raw": "0"
                    }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
