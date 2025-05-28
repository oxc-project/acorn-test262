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
      "end": 151,
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
        "end": 151,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 149,
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
              "end": 149,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 83,
                    "end": 143,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 87,
                        "end": 142,
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
                              "kind": "init",
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
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false
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
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 129,
                                  "end": 132,
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
