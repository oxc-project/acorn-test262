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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 109,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 107,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 107,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 37,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": true,
                              "shorthand": false,
                              "computed": true,
                              "key": {
                                "type": "CallExpression",
                                "start": 55,
                                "end": 65,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 55,
                                  "end": 63,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 55,
                                    "end": 59
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 60,
                                    "end": 63,
                                    "name": "bar",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [],
                                "optional": false,
                                "typeArguments": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 66,
                                "end": 72,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 69,
                                  "end": 72,
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
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 92,
                    "end": 101,
                    "argument": {
                      "type": "Literal",
                      "start": 99,
                      "end": 100,
                      "value": 0,
                      "raw": "0"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
