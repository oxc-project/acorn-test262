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
      "end": 151,
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
        "end": 151,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 149,
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
              "end": 149,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 56,
                "end": 149,
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
                    "type": "VariableDeclaration",
                    "start": 83,
                    "end": 143,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 87,
                        "end": 142,
                        "id": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 90,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": true,
                              "shorthand": false,
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
                                    "callee": {
                                      "type": "Super",
                                      "start": 109,
                                      "end": 114
                                    },
                                    "arguments": [],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 118,
                                    "end": 124,
                                    "value": "prop",
                                    "raw": "\"prop\""
                                  }
                                ]
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 126,
                                "end": 132,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 129,
                                  "end": 132,
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
