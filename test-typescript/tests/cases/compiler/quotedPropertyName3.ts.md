__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 119,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 119,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 17,
              "end": 24,
              "raw": "\"prop1\"",
              "value": "prop1",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 117,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 117,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 117,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 54,
                    "end": 82,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 58,
                        "end": 81,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 59,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 62,
                          "end": 81,
                          "async": false,
                          "body": {
                            "type": "MemberExpression",
                            "start": 68,
                            "end": 81,
                            "computed": true,
                            "object": {
                              "type": "ThisExpression",
                              "start": 68,
                              "end": 72
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "start": 73,
                              "end": 80,
                              "raw": "\"prop1\"",
                              "value": "prop1",
                              "regex": null,
                              "bigint": null
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 91,
                    "end": 111,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 95,
                        "end": 110,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 104,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 104,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 98,
                              "end": 104
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 107,
                          "end": 110,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 108,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Test",
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
