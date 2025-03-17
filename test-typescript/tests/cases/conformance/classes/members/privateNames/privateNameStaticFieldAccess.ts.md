__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 156,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 156,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 46,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 29,
              "name": "myField"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 32,
              "end": 45,
              "raw": "\"hello world\"",
              "value": "hello world"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 154,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 62,
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
              "start": 62,
              "end": 154,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 154,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 75,
                    "end": 99,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 75,
                      "end": 98,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 87,
                          "end": 97,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 88,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 89,
                            "end": 97,
                            "name": "myField"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 75,
                        "end": 86,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 82,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 86,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 113,
                    "end": 140,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 113,
                      "end": 139,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 125,
                          "end": 138,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 130,
                            "end": 138,
                            "name": "myField"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 113,
                        "end": 124,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 120,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 124,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
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
        "name": "A",
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
