__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 388,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
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
      "start": 15,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 388,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 386,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 386,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 386,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 66,
                    "end": 74,
                    "expression": {
                      "type": "CallExpression",
                      "start": 66,
                      "end": 73,
                      "callee": {
                        "type": "Super",
                        "start": 66,
                        "end": 71
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 83,
                    "end": 380,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 83,
                      "end": 380,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 89,
                        "end": 380,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 103,
                            "end": 370,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 107,
                                "end": 369,
                                "id": {
                                  "type": "Identifier",
                                  "start": 107,
                                  "end": 110,
                                  "name": "obj",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "start": 113,
                                  "end": 369,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 330,
                                      "end": 355,
                                      "method": true,
                                      "shorthand": false,
                                      "computed": true,
                                      "key": {
                                        "type": "SequenceExpression",
                                        "start": 332,
                                        "end": 347,
                                        "expressions": [
                                          {
                                            "type": "CallExpression",
                                            "start": 332,
                                            "end": 339,
                                            "callee": {
                                              "type": "Super",
                                              "start": 332,
                                              "end": 337
                                            },
                                            "arguments": [],
                                            "optional": false,
                                            "typeArguments": null
                                          },
                                          {
                                            "type": "Literal",
                                            "start": 341,
                                            "end": 347,
                                            "value": "prop",
                                            "raw": "\"prop\""
                                          }
                                        ]
                                      },
                                      "value": {
                                        "type": "FunctionExpression",
                                        "start": 349,
                                        "end": 355,
                                        "id": null,
                                        "expression": false,
                                        "generator": false,
                                        "async": false,
                                        "params": [],
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 352,
                                          "end": 355,
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
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
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
