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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 109,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 107,
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
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 107,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 107,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 30,
                    "end": 83,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 34,
                        "end": 82,
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
                              "kind": "init",
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
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 66,
                                "end": 72,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 69,
                                  "end": 72,
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
              "expression": false
            },
            "kind": "method",
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
