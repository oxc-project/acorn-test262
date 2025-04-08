__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 156,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 154,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 154,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 154,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 43,
                    "end": 52,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 47,
                        "end": 51,
                        "id": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 51,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 48,
                            "end": 51,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 50,
                              "end": 51,
                              "typeName": {
                                "type": "Identifier",
                                "start": 50,
                                "end": 51,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 61,
                    "end": 77,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 65,
                        "end": 76,
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 69,
                          "end": 76,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 69,
                            "end": 74,
                            "object": {
                              "type": "Identifier",
                              "start": 69,
                              "end": 70,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 71,
                              "end": 74,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 86,
                    "end": 105,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 90,
                        "end": 104,
                        "id": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 91,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 94,
                          "end": 104,
                          "callee": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 99,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 100,
                              "end": 103,
                              "value": 123,
                              "raw": "123"
                            }
                          ],
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 114,
                    "end": 127,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 118,
                        "end": 126,
                        "id": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 119,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 122,
                          "end": 126,
                          "object": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 123,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Literal",
                            "start": 124,
                            "end": 125,
                            "value": 1,
                            "raw": "1"
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 136,
                    "end": 148,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 140,
                        "end": 147,
                        "id": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 141,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 144,
                          "end": 147,
                          "callee": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 145,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
        "start": 7,
        "end": 20,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 19,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
