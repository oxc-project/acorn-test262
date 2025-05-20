__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 109,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 109,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 107,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 107,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 107,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 30,
                    "end": 83,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 34,
                        "end": 82,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 37,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 40,
                          "end": 82,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 54,
                              "end": 72,
                              "computed": true,
                              "key": {
                                "type": "CallExpression",
                                "start": 55,
                                "end": 65,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 55,
                                  "end": 63,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 55,
                                    "end": 59
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 60,
                                    "end": 63,
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 66,
                                "end": 72,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 69,
                                  "end": 72,
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
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 92,
                    "end": 101,
                    "argument": {
                      "type": "Literal",
                      "start": 99,
                      "end": 100,
                      "raw": "0",
                      "value": 0
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
