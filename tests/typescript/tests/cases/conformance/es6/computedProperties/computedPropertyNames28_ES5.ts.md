__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
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
      "start": 15,
      "end": 151,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 151,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 149,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 66,
                    "end": 74,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 66,
                      "end": 73,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 66,
                        "end": 71
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 83,
                    "end": 143,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 87,
                        "end": 142,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 90,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 93,
                          "end": 142,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 107,
                              "end": 132,
                              "computed": true,
                              "key": {
                                "type": "SequenceExpression",
                                "start": 109,
                                "end": 124,
                                "expressions": [
                                  {
                                    "type": "CallExpression",
                                    "start": 109,
                                    "end": 116,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Super",
                                      "start": 109,
                                      "end": 114
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 118,
                                    "end": 124,
                                    "raw": "\"prop\"",
                                    "value": "prop"
                                  }
                                ]
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 126,
                                "end": 132,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 129,
                                  "end": 132,
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
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
