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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 13,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 187,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 32,
        "end": 187,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 132,
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
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 132,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 76,
                            "end": 81,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "NewExpression",
                            "start": 83,
                            "end": 90,
                            "callee": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 90,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 104,
                          "end": 115,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 104,
                            "end": 108,
                            "decorators": [],
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 110,
                            "end": 115,
                            "value": false,
                            "raw": "false"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 185,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 138,
              "end": 153,
              "object": {
                "type": "Identifier",
                "start": 138,
                "end": 144,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 145,
                "end": 153,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 154,
              "end": 185,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": true,
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
      "type": "ForOfStatement",
      "start": 189,
      "end": 255,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 194,
        "end": 201,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 200,
            "end": 201,
            "id": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "NewExpression",
        "start": 205,
        "end": 220,
        "callee": {
          "type": "Identifier",
          "start": 209,
          "end": 220,
          "decorators": [],
          "name": "FooIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 222,
        "end": 255,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 228,
            "end": 240,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 234,
                "end": 239,
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
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
