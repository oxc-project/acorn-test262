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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 388,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 388,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 386,
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
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 386,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 89,
                        "end": 380,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 103,
                            "end": 370,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 107,
                                "end": 369,
                                "id": {
                                  "type": "Identifier",
                                  "start": 107,
                                  "end": 110,
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                      "kind": "init",
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
                                            "typeArguments": null,
                                            "arguments": [],
                                            "optional": false
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
                                        "generator": false,
                                        "async": false,
                                        "declare": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 352,
                                          "end": 355,
                                          "body": []
                                        },
                                        "expression": false
                                      },
                                      "method": true,
                                      "shorthand": false,
                                      "computed": true,
                                      "optional": false
                                    }
                                  ]
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
