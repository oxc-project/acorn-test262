__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 246,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 203,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 148,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 71,
                    "end": 142,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 78,
                      "end": 141,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 92,
                          "end": 106,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 97,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "NewExpression",
                            "start": 99,
                            "end": 106,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 106,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 120,
                          "end": 131,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 124,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 126,
                            "end": 131,
                            "raw": "false",
                            "value": false
                          }
                        }
                      ]
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
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 201,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 154,
              "end": 169,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 154,
                "end": 160,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 169,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 201,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 201,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 183,
                    "end": 195,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 190,
                      "end": 194
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
        "start": 36,
        "end": 47,
        "decorators": [],
        "name": "FooIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ForOfStatement",
      "start": 205,
      "end": 246,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 236,
        "end": 246,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 242,
            "end": 244,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 210,
        "end": 215,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 214,
            "end": 215,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "NewExpression",
        "start": 219,
        "end": 234,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 223,
          "end": 234,
          "decorators": [],
          "name": "FooIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
