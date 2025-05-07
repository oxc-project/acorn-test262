__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 13,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
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
      "start": 14,
      "end": 187,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 187,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 132,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
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
              "start": 42,
              "end": 132,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 132,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 55,
                    "end": 126,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 62,
                      "end": 125,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 76,
                          "end": 90,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 76,
                            "end": 81,
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
                            "start": 83,
                            "end": 90,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 90,
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
                          "start": 104,
                          "end": 115,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 108,
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
                            "start": 110,
                            "end": 115,
                            "raw": "false",
                            "value": false,
                            "regex": null,
                            "bigint": null
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
            "start": 137,
            "end": 185,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 138,
              "end": 153,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 138,
                "end": 144,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 145,
                "end": 153,
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
              "start": 154,
              "end": 185,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 185,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 167,
                    "end": 179,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 174,
                      "end": 178
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
        "start": 20,
        "end": 31,
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
      "start": 189,
      "end": 255,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 222,
        "end": 255,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 228,
            "end": 240,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 234,
                "end": 239,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 238,
                  "end": 239,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 194,
        "end": 201,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 200,
            "end": 201,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "NewExpression",
        "start": 205,
        "end": 220,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 209,
          "end": 220,
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
