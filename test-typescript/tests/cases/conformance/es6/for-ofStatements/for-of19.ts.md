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
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
        "body": []
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
      "start": 30,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 47,
        "name": "FooIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 97,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "NewExpression",
                            "start": 99,
                            "end": 106,
                            "callee": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 106,
                              "name": "Foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 120,
                          "end": 131,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 124,
                            "name": "done",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 126,
                            "end": 131,
                            "value": false,
                            "raw": "false"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
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
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 201,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 154,
              "end": 169,
              "object": {
                "type": "Identifier",
                "start": 154,
                "end": 160,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 169,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 201,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      "type": "ForOfStatement",
      "start": 205,
      "end": 246,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 210,
        "end": 215,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 214,
            "end": 215,
            "id": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "name": "v",
              "typeAnnotation": null,
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
      "right": {
        "type": "NewExpression",
        "start": 219,
        "end": 234,
        "callee": {
          "type": "Identifier",
          "start": 223,
          "end": 234,
          "name": "FooIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 236,
        "end": 246,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 242,
            "end": 244,
            "expression": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
