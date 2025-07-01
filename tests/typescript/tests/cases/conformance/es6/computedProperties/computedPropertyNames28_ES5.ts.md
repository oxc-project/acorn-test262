__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 11,
        "end": 14
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 22
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 35
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 53
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 66,
                        "end": 71
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 66,
                      "end": 73
                    },
                    "directive": null,
                    "start": 66,
                    "end": 74
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 90
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "SequenceExpression",
                                "expressions": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Super",
                                      "start": 109,
                                      "end": 114
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 109,
                                    "end": 116
                                  },
                                  {
                                    "type": "Literal",
                                    "value": "prop",
                                    "raw": "\"prop\"",
                                    "start": 118,
                                    "end": 124
                                  }
                                ],
                                "start": 109,
                                "end": 124
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "start": 129,
                                  "end": 132
                                },
                                "expression": false,
                                "start": 126,
                                "end": 132
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 107,
                              "end": 132
                            }
                          ],
                          "start": 93,
                          "end": 142
                        },
                        "definite": false,
                        "start": 87,
                        "end": 142
                      }
                    ],
                    "declare": false,
                    "start": 83,
                    "end": 143
                  }
                ],
                "start": 56,
                "end": 149
              },
              "expression": false,
              "start": 53,
              "end": 149
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 42,
            "end": 149
          }
        ],
        "start": 36,
        "end": 151
      },
      "abstract": false,
      "declare": false,
      "start": 15,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 151
}
```
