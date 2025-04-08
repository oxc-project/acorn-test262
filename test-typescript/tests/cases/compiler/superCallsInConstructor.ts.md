__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 22,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 22,
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
          },
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 35,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 35,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 35,
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
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 49,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 66,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "name": "x",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            },
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
      "start": 71,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 84,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 93,
        "end": 97,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 98,
        "end": 258,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 256,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 256,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 256,
                "body": [
                  {
                    "type": "WithStatement",
                    "start": 128,
                    "end": 212,
                    "object": {
                      "type": "NewExpression",
                      "start": 133,
                      "end": 140,
                      "callee": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 142,
                      "end": 212,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 156,
                          "end": 162,
                          "expression": {
                            "type": "CallExpression",
                            "start": 156,
                            "end": 161,
                            "callee": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 159,
                              "name": "foo",
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
                          "start": 175,
                          "end": 183,
                          "expression": {
                            "type": "CallExpression",
                            "start": 175,
                            "end": 182,
                            "callee": {
                              "type": "Super",
                              "start": 175,
                              "end": 180
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 196,
                          "end": 202,
                          "expression": {
                            "type": "CallExpression",
                            "start": 196,
                            "end": 201,
                            "callee": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 199,
                              "name": "bar",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TryStatement",
                    "start": 222,
                    "end": 250,
                    "block": {
                      "type": "BlockStatement",
                      "start": 226,
                      "end": 228,
                      "body": []
                    },
                    "handler": {
                      "type": "CatchClause",
                      "start": 229,
                      "end": 250,
                      "param": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 236,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 238,
                        "end": 250,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 240,
                            "end": 248,
                            "expression": {
                              "type": "CallExpression",
                              "start": 240,
                              "end": 247,
                              "callee": {
                                "type": "Super",
                                "start": 240,
                                "end": 245
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    "finalizer": null
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
